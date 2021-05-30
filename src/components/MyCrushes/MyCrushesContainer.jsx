import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import CrushAdder from "./CrushAdder";
import Matches from "./Matches";

const MyCrushesContainer = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex spacing="10">
        <Sidebar />
        <Spacer flex="3%" />
        <Box width="100%" direction="column">
          <CrushAdder />
          <Matches />
        </Box>
      </Flex>
    </Box>
  );
};

export default MyCrushesContainer;
