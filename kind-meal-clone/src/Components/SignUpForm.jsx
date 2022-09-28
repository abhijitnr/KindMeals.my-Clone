import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formDetails = {
  name: "",
  email: "",
  password: "",
  country: "",
  state: "",
  gender: "",
};

function SignUpForm() {
  const [formData, setFormData] = useState(formDetails);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    // const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.country === "" ||
      formData.state === "" ||
      formData.gender === ""
    ) {
      alert("Fields can't be empty. Please fill the details !");
    } else {
      localStorage.setItem("signupData", JSON.stringify(formData));
      navigate("/login");
    }
    setFormData(formDetails);
  };
  return (
    <Box marginBottom="50px">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter your name..."
          value={formData.name}
        />

        <FormLabel marginTop="10px">Email</FormLabel>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your email..."
          value={formData.email}
        />

        <FormLabel marginTop="10px">Password</FormLabel>
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter a password..."
          value={formData.password}
        />

        <FormLabel marginTop="10px">Country</FormLabel>
        <Input
          onChange={handleChange}
          name="country"
          type="text"
          placeholder="Enter your country name..."
          value={formData.country}
        />

        <FormLabel marginTop="10px">State</FormLabel>
        <Input
          onChange={handleChange}
          name="state"
          type="text"
          placeholder="Enter your state name..."
          value={formData.state}
        />

        <FormLabel marginTop="10px">Gender</FormLabel>
        <Select name="gender" onChange={handleChange} value={formData.gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Feamle</option>
        </Select>
      </FormControl>

      <Box marginTop="10px">
        <Checkbox isInvalid>
          I agree to KindMeal.my's Terms & Conditions
        </Checkbox>
      </Box>

      <Box marginTop="20px" textAlign="center">
        <Button colorScheme="teal" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;
