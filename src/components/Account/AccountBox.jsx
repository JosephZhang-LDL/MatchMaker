import React from "react";
import { Box, Flex, Heading, Input, Text, FormControl, Link, Button } from "@chakra-ui/react";
import { TabContainer, Row, Col } from "../general/Standard";

const data = {
  name: "Kevin Nguyen",
  username: "fboiknguyen",
};

const AccountBox = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex justify="center">
        <TabContainer flexDir="column" py="6" px="6" width="50%" minWidth="400px">
          <Row justify="center" textAlign="center">
            <Heading>My Account</Heading>
          </Row>
          <form>
            <Row mt="4">
              <Text fontSize="24px" fontWeight="medium">
                Name
              </Text>
            </Row>
            <FormControl>
              <Row>
                <Input
                  fontSize="18px"
                  variant="flushed"
                  placeholder="Name"
                  value={data.name}
                />
              </Row>
            </FormControl>
            <Row mt="4">
              <Text fontSize="24px" fontWeight="medium">
                Instagram Username
              </Text>
            </Row>
            <Row mt="1">
              <Col>
                <Text fontSize="18px">{data.username}</Text>
              </Col>
              <Col ml="2">
                <Link fontSize="18px" color="blue.600">change</Link>
              </Col>
            </Row>
            <Row mt="6" justify="space-between">
                <Col>
                <Button>Save Changes</Button>
                </Col>
                <Col>
                <Button colorScheme="red">Delete Account</Button>
                </Col>
            </Row>
          </form>
        </TabContainer>
      </Flex>
    </Box>
  );
};

export default AccountBox;
