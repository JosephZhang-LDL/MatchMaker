import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TabContainer, Row } from "../general/Standard";
import { RiFacebookBoxFill } from "react-icons/ri";

const Register = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex justify="center">
        <TabContainer flexDir="column" p="6" width="40%" minWidth="400px">
          <Row justify="center">
            <Heading fontSize="28px">Register</Heading>
          </Row>
          <Row justify="center" mt="2">
            <Text fontSize="18px">
              Have an account already?{" "}
              <Link to="/login">
                <Text color="blue.400" as="span">
                  Login
                </Text>
              </Link>
            </Text>
          </Row>
          {/**<Row mt="4">
            <Flex
              backgroundColor="blue.600"
              borderRadius="2px"
              py="2"
              px="6"
              width="100%"
            >
              <Col justify="center">
                <RiFacebookBoxFill size="24px" color="white" />
              </Col>
              <Col ml="3">
                <Text fontSize="18px" color="white" fontWeight="medium">
                  Login with Facebook
                </Text>
              </Col>
            </Flex>
  </Row>*/}
          <Row mt="4">
            <Button
              leftIcon={<RiFacebookBoxFill size="24px" color="white" />}
              colorScheme="facebook"
              variant="solid"
              isFullWidth
            >
              Register with Facebook
            </Button>
          </Row>
        </TabContainer>
      </Flex>
    </Box>
  );
};

export default Register;
