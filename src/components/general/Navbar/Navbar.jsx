import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const NavBox = styled(Box)`
  padding: 0 1em;
`;

const Navbar = (props) => {
  return (
    <Flex padding=".75em 5em" boxShadow="base" justify="space-between">
      <Text color="green.500" fontSize="28px" fontWeight="bold">
        Matchmaker
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
