import React from 'react';
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const TabContainer = styled(Flex).attrs(props => ({
    border: "1px solid",
    borderColor: "gray.200",
    boxShadow: "sm"
}))`
    border-radius: 5px;
`;
