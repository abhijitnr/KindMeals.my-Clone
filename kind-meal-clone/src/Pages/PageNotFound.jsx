import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Box
      width="30%"
      margin="auto"
      marginTop="100px"
      textAlign="center"
      paddingBottom="30px"
      fontFamily="'Ubuntu', sans-serif"
    >
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGSurC1dTDHrFf8hCLI2W3T8655CtiuPwQQ&usqp=CAU"
        alt="error_404"
        border="1px solid black"
        width="500px"
        height="300px"
      />
      <Text fontSize="4xl" color="red">
        404 ERROR
      </Text>
      <Text fontSize="xl" color="navy">
        Sorry ! The page you are looking is not found
      </Text>

      <Link to="/">
        <Button
          border="1px solid grey"
          backgroundColor="azure"
          padding="0.5rem 1rem"
          fontWeight="bold"
          fontFamily="'Ubuntu', sans-serif"
          borderRadius="8px"
          cursor="pointer"
          marginTop="20px"
        >
          GO BACK TO HOME
        </Button>
      </Link>
    </Box>
  );
}

export default PageNotFound;
