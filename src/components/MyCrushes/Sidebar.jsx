import React from "react";
import { Text, Box, Avatar, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { TabContainer, Row, Col } from "../general/Standard";
import { IoAdd } from "react-icons/io5";

const imgUrl =
  "https://p7.pstatp.com/origin/pgc-image/4b4fae11e53e4c6bb84587b51b700df2.jpeg";

const interests = [
  { interest: "Watching Movies", category: "hobby" },
  { interest: "Clubbing", category: "hobby" },
  { interest: "Girls", category: "gender" },
  { interest: "Keshi", category: "music" },
  { interest: "88Rising", category: "music" },
];

const stats = {
  crushes: 16,
  matches: 6,
  admirers: 182
}

const Sidebar = (props) => {
  return (
    <TabContainer flex="40%" direction="column" height="100%" py="8" px="8">
      <Row>
        <Avatar src={imgUrl} size="lg" />
        <Box ml="5">
          <Heading fontSize="28">Kevin Nguyen</Heading>
          <Text mt=".25em" fontSize="16" color="gray.500">
            @Kevjumba.Official
          </Text>
        </Box>
      </Row>
      <Row mt="5">
        <Heading fontSize="24">Interests</Heading>
      </Row>
      <Wrap mt="2">
        {interests.map((interest) => (
          <WrapItem>
            <InterestTag
              text={interest.interest}
              category={interest.category}
            />
          </WrapItem>
        ))}
        <WrapItem>
          <AddTagButton />
        </WrapItem>
      </Wrap>
      <Row mt="5">
        <Heading fontSize="24">Statistics</Heading>
      </Row>
      <Row mt="2">
        <Text fontSize="18">Crushes: {stats.crushes} </Text>
      </Row>
      <Row mt="1">
        <Text fontSize="18">Matches: {stats.matches} </Text>
      </Row>
      <Row mt="1">
        <Text fontSize="18">Admirers: {stats.admirers} </Text>
      </Row>
    </TabContainer>
  );
};

const findCategory = (category) => {
  switch (category) {
    case "music":
      return "teal.500";
    case "hobby":
      return "purple.500";
    case "gender":
      return "red.500";
    case "political":
      return "cyan.500";
    default:
      return "gray.500";
  }
};

const InterestTag = ({ text, category }) => {
  return (
    <Box
      borderRadius="2px"
      px="4"
      py="1"
      backgroundColor={() => findCategory(category)}
      color="white"
    >
      {text}
    </Box>
  );
};

const AddTagButton = (props) => {
  return (
    <Box
      borderRadius="2px"
      p="1"
      backgroundColor="gray.500"
      _hover={{
        background: "gray.400",
        transition: ".2s ease",
        cursor: "pointer",
      }}
      color="white"
    >
      <IoAdd size={24} />
    </Box>
  );
};

export default Sidebar;
