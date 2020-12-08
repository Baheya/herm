import { Text } from '@chakra-ui/react';
import withApollo from 'lib/apollo';
import Account from '../components/account';
import Layout from '../components/Layout';

function Index({ me }) {
  return (
    <Layout me={me}>
      <Text fontSize="40px" color="brand.500" as="h1">
        Hello, {me.name}!
      </Text>
      <Account />
    </Layout>
  );
}

Index.getInitialProps = async function (context) {
  const res = await fetch(`${process.env.BASE_URL}/api/me`, {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });
  const me = await res.json();

  if (me.error) {
    context.res.writeHead(302, {
      Location: '/api/login',
    });
    context.res.end();
    return;
  }
  return { me };
};

export default withApollo(Index);
