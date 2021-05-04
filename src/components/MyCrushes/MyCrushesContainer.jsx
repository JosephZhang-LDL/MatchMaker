import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { TabContainer } from "../general/Standard";

const MyCrushesContainer = (props) => {
  return (
    <Box px="5em" py="3em">
      <Flex direction="row">
        <TabContainer flex="30%" mr="5">
          HELLO!
        </TabContainer>
        <TabContainer flex="70%" ml="5">
          HELLO!
        </TabContainer>
      </Flex>
    </Box>
  );
};

export default MyCrushesContainer;
