import { Box, FormControl, Input, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toggleAuth } = useContext(AuthContext);

  const signupData = JSON.parse(localStorage.getItem("signupData"));
  // console.log(signupData);

  const handleLogin = (event) => {
    event.preventDefault();
    if (signupData.email === email && signupData.password === password) {
      toggleAuth();
      navigate("/");
    } else {
      alert("Credential doesn't match. Please fill correct details !");
    }
  };

  return (
    <Box
      width="40%"
      margin="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="50px"
      marginBottom="60px"
      border="1px solid gray"
      borderRadius="15px"
      padding="15px"
    >
      <Box>
        <Image
          src="https://www.kindmeal.my/images/logo-kindmeal.png"
          alt="Kind meals logo"
        />
      </Box>
      <Box marginTop="15px">
        <Text fontSize="3xl">Member Login</Text>
      </Box>
      <Box width="50%" margin="auto" marginTop="20px">
        <FormControl>
          <Box marginTop="15px">
            <Input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email..."
              type="email"
            />
          </Box>
          <Box marginTop="15px">
            <Input
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your Password..."
              type="password"
            />
          </Box>
        </FormControl>

        <Box width="70%" margin="auto" marginTop="30px">
          <Button
            onClick={handleLogin}
            backgroundColor="#2BB673"
            color="white"
            width="100%"
          >
            LOGIN
          </Button>
        </Box>
      </Box>

      <Box width="50%" marginTop="40px">
        <Button backgroundColor="#3B5988" color="white" width="100%">
          LOGIN WITH FACEBOOK
        </Button>
      </Box>

      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="30px"
      >
        <Text cursor="pointer" fontSize="sm">
          Forgot password?
        </Text>
        <Link to="/signup">
          {" "}
          <Text fontSize="sm">Not a member? Sign up FREE!</Text>
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
