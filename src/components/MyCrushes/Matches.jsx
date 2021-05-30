import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Avatar,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Row } from "../general/Standard";
import { IoPaperPlaneOutline } from "react-icons/io5";
import _ from "lodash";

const data = [
  {
    name: "Joe Biden",
    profPic:
      "https://media.distractify.com/brand-img/5wNVKV854/0x0/joe-biden-memes-1586543791437.jpg",
    username: "bidenlikesyou",
  },
];

const Matches = (props) => {
  return (
    <Box mt="6">
      <Heading fontSize="28px" mb="2">
        Matches
      </Heading>
      <SimpleGrid columns={4} spacing="5">
        {_.times(5, () => (
          <MatchBox />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const MatchBox = (props) => {
  return (
    <Flex
      width="100%"
      flexDir="column"
      borderRadius="2px"
      border="1px solid"
      borderColor="gray.200"
      py="6"
      px="6"
      boxShadow="sm"
    >
      <Row justify="center" width="100%">
        <Avatar size="lg" />
      </Row>
      <Row justify="center" width="100%" mt="2">
        <Heading fontSize="24px">First Last</Heading>
      </Row>
      <Row justify="center" width="100%">
        <Text fontSize="18px" color="gray.400">@Username</Text>
      </Row>
      <HStack mt="4">
        <Button width="70%">Follow</Button>
        <Button width="30%" minWidth="50px" colorScheme="blue"><IoPaperPlaneOutline size="20px" /></Button>
      </HStack>
    </Flex>
  );
};

export default Matches;
