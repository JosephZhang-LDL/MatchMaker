import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Text,
  HStack,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import { TabContainer, Row, Col } from "../general/Standard";
import CrushBox from "./CrushBox";
import { FiHeart } from "react-icons/fi";

const data = [
  {
    name: "Joe Biden",
    profPic:
      "https://media.distractify.com/brand-img/5wNVKV854/0x0/joe-biden-memes-1586543791437.jpg",
    username: "bidenlikesyou",
  },
];

const CrushAdder = (props) => {
  //Crushes to display under the "Crushes" heading
  const [crushes, setCrushes] = useState(data);

  const validate = (value) => {
    let error
    if (!value) {
      error = "Required"
    }
    return error
  }

  const removeCrush = (index) => {
    setCrushes(crushes.filter((crush, i) => i !== index));
  };

  return (
    <Box>
      <Heading fontSize="28px" mb="2">
        My Crushes
      </Heading>
      <TabContainer flex="60%" px="8" py="6" flexDirection="column">
        <Formik
          initialValues={{ name: "", username: "" }}
          onSubmit={(values, actions) => {
            console.log(values);
            setCrushes([
              ...crushes,
              { name: values.name, username: values.username, profPic: "" },
            ]);
            actions.resetForm();
          }}
        >
          {(formProps) => (
            <Form>
              <HStack width="100%" spacing="10" align="flex-start">
                <Col flex="100%">
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel fontSize="20px">Name</FormLabel>
                        <Input
                          variant="flushed"
                          id="name"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                </Col>
                <Col flex="100%">
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel fontSize="20px">Instagram User</FormLabel>
                        <Input
                          variant="flushed"
                          id="username"
                          placeholder="Username"
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                </Col>
                <Col alignSelf="flex-end">
                  <Button type="submit" colorScheme="red">
                    <FiHeart />
                  </Button>
                </Col>
              </HStack>
            </Form>
          )}
        </Formik>
        <Row mt="4">
          <Text fontSize="20px" fontWeight="medium">
            Crushes 😍
          </Text>
        </Row>
        <SimpleGrid mt="2" columns={2} spacing="5">
          {crushes.map((crush, index) => (
            <CrushBox
              key={index}
              id={index}
              name={crush.name}
              profPic={crush.profPic}
              username={crush.username}
              onClick={() => removeCrush(index)}
            />
          ))}
        </SimpleGrid>
      </TabContainer>
    </Box>
  );
};

export default CrushAdder;
