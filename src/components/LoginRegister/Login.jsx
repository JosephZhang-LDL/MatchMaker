import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Login = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex spacing="10">
        <Spacer flex="3%" />
        <Box width="100%" direction="column">
            <Text>Login</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
