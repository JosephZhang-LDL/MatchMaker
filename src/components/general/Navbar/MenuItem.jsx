import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import styled from "styled-components";

const NavBox = styled(Box)`
  padding: 0 1em;
`;

const MenuItem = (props) => {
  return (
    <NavBox>
      <Link href={`/${props.link}`}>
        <Text color="gray.600" fontSize="20px">
          {props.text}
        </Text>
      </Link>
    </NavBox>
  );
};

export default MenuItem;
