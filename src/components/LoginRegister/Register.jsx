import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Register = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex spacing="10">
        <Spacer flex="3%" />
        <Box width="100%" direction="column">
            <Text>Register</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
