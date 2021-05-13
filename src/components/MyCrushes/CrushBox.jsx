import React from "react";
import {
  Text,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Col } from "../general/Standard";
import { IoClose } from "react-icons/io5";

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
            @{props.username}
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
          <IoClose size="24px" onClick={props.onClick} />
        </Text>
      </Col>
    </Flex>
  );
};

export default CrushBox;
