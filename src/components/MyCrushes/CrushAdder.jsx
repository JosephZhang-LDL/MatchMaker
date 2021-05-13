import React from "react";
import { Box, Heading, Input, Text, HStack, Button } from "@chakra-ui/react";
import { TabContainer, Row, Col } from "../general/Standard";
import { FiHeart } from "react-icons/fi";

const CrushAdder = (props) => {
  return (
    <Box>
      <Heading fontSize="28px" mb="2">
        My Crushes
      </Heading>
      <TabContainer flex="60%" px="8" py="6">
        <HStack width="100%" spacing="10" backgroundColor="green.100">
          <Col flex="100%">
            <Text fontSize="18px" fontWeight="medium">
              Name
            </Text>
            <Input variant="flushed" />
          </Col>
          <Col flex="100%">
            <Text fontSize="18px" fontWeight="medium">
              Instagram User
            </Text>
            <Input variant="flushed" />
          </Col>
          <Col backgroundColor="green" alignSelf="bottom">
            <Button>
              <FiHeart />
            </Button>
          </Col>
        </HStack>
      </TabContainer>
    </Box>
  );
};

export default CrushAdder;
