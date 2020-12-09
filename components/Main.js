import { Box } from '@chakra-ui/react';
function Main({ children }) {
  return (
    <Box paddingLeft="40px" paddingTop="40px" width="100%">
      {children}
    </Box>
  );
}
export default Main;
