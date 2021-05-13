import React from "react";
import {
  Box,
  Heading,
  Input,
  Text,
  HStack,
  Flex,
  Button,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { TabContainer, Row, Col } from "../general/Standard";
import { FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const crushes = [
  {
    name: "Joe Biden",
    profPic:
      "https://media.distractify.com/brand-img/5wNVKV854/0x0/joe-biden-memes-1586543791437.jpg",
    username: "@bidenlikesyou",
  },
];

const CrushAdder = (props) => {
  return (
    <Box>
      <Heading fontSize="28px" mb="2">
        My Crushes
      </Heading>
      <TabContainer flex="60%" px="8" py="6" flexDirection="column">
        <HStack width="100%" spacing="10">
          <Col flex="100%">
            <Text fontSize="20px" fontWeight="medium">
              Name
            </Text>
            <Input variant="flushed" />
          </Col>
          <Col flex="100%">
            <Text fontSize="20px" fontWeight="medium">
              Instagram User
            </Text>
            <Input variant="flushed" />
          </Col>
          <Col alignSelf="flex-end">
            <Button>
              <FiHeart />
            </Button>
          </Col>
        </HStack>
        <Row mt="4">
          <Text fontSize="20px" fontWeight="medium">
            Crushes 😍
          </Text>
        </Row>
        <SimpleGrid mt="2" columns={2} spacing="5">
          {crushes.map((crush) => (
            <CrushBox
              name={crush.name}
              profPic={crush.profPic}
              username={crush.username}
            />
          ))}
        </SimpleGrid>
      </TabContainer>
    </Box>
  );
};

const CrushBox = (props) => {
  return (
    <Flex
      borderRadius="2px"
      backgroundColor="gray.100"
      width="100%"
      px="4"
      py="2"
      justify="space-between"
      flexDirection="row"
      gap="12px"
    >
      <Flex>
        <Col>
          <Avatar src={props.profPic} />
        </Col>
        <Col ml="3">
          <Text fontSize="18px" fontWeight="medium">
            {props.name}
          </Text>
          <Text fontSize="14px" color="gray.600" fontWeight="light" mt="-1">
            {props.username}
          </Text>
        </Col>
      </Flex>
      <Col alignSelf="center">
        <Text
          color="gray.400"
          _hover={{
            color: "red.500",
            cursor: "pointer",
            transition: ".25s ease",
          }}
        >
          <IoClose size="24px" />
        </Text>
      </Col>
    </Flex>
  );
};

export default CrushAdder;
