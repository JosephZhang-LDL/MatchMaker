import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled(Box)`
  padding: 0 1em;
`;

const MenuItem = (props) => {
  return (
    <NavBox>
      <Link to={`/${props.link}`}>
        <Text color="gray.600" fontSize="20px">
          {props.text}
        </Text>
      </Link>
    </NavBox>
  );
};

export default MenuItem;
