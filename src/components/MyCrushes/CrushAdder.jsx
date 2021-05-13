import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Text,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { TabContainer, Row, Col } from "../general/Standard";
import CrushBox from "./CrushBox";
import { FiHeart } from "react-icons/fi";

const data = [
  {
    name: "Joe Biden",
    profPic:
      "https://media.distractify.com/brand-img/5wNVKV854/0x0/joe-biden-memes-1586543791437.jpg",
    username: "@bidenlikesyou",
  },
];

const CrushAdder = (props) => {
  //Crushes to display under the "Crushes" heading
  const [crushes, setCrushes] = useState(data);

  //Controlled form data for adding crushes
  const [addCrush, setAddCrush] = useState({ name: "", username: "" });

  const setName = (e) => {
    setAddCrush({ ...addCrush, name: e.target.value });
  };
  const setUsername = (e) => {
    setAddCrush({ ...addCrush, username: e.target.value });
  };
  const submitCrush = () => {
    console.log(addCrush);
    setAddCrush({ name: "", username: "" });
  };

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
            <Input variant="flushed" onChange={setName} value={addCrush.name} />
          </Col>
          <Col flex="100%">
            <Text fontSize="20px" fontWeight="medium">
              Instagram User
            </Text>
            <Input
              variant="flushed"
              onChange={setUsername}
              value={addCrush.username}
            />
          </Col>
          <Col alignSelf="flex-end">
            <Button type="submit" onClick={submitCrush}>
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

export default CrushAdder;
