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
  Wrap
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
  {
    name: "Arnold",
    profPic:
      "https://cdn.britannica.com/11/222411-050-D3D66895/American-politician-actor-athlete-Arnold-Schwarzenegger-2016.jpg",
    username: "therealarnold",
  },
  {
    name: "BTS Jungkook",
    profPic:
      "https://kenyabtsarmy.files.wordpress.com/2020/07/jungkook-poem-letter-to-bts-3-1.jpg?w=564",
    username: "jk.official",
  },
];

const Matches = (props) => {
  return (
    <Box mt="6">
      <Heading fontSize="28px" mb="2">
        Matches
      </Heading>
      <SimpleGrid columns={4} spacing="5">
        {data.map((crushMatch) => (
          <MatchBox
            name={crushMatch.name}
            profPic={crushMatch.profPic}
            username={crushMatch.username}
          />
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
        <Avatar size="lg" src={props.profPic} />
      </Row>
      <Row justify="center" width="100%" mt="2" wrap="flex-wrap" textAlign="center">
        <Heading fontSize="22px">{props.name}</Heading>
      </Row>
      <Row justify="center" width="100%" textAlign="center">
        <Text fontSize="18px" color="gray.400">
          @{props.username}
        </Text>
      </Row>
      <HStack mt="4" height="100%" align="flex-end">
        <Button width="70%">Follow</Button>
        <Button width="30%" minWidth="50px" colorScheme="blue">
          <IoPaperPlaneOutline size="20px" />
        </Button>
      </HStack>
    </Flex>
  );
};

export default Matches;
