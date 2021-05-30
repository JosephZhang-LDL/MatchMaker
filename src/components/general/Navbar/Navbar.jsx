import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const Navbar = (props) => {
  return (
    <Flex py=".75em" px="5em" boxShadow="base" justify="space-between">
      <Text color="green.500" fontSize="28px" fontWeight="bold">
        <Link to="/">MatchMe</Link>
      </Text>
      <Flex align="center">
        <MenuItem text="My Crushes" link="my-crushes" />
        <MenuItem text="Account" link="account" />
        <MenuItem text="Logout" link="logout" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
