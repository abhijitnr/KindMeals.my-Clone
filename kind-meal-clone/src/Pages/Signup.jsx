import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import SignUpForm from "../Components/SignUpForm";

const leftFoods = [
  {
    image: "https://www.kindmeal.my/images/join_normal.png",
    title: "Food Lover Sign Up",
  },
  {
    image: "https://www.kindmeal.my/images/join_shop.png",
    title: "Restaurant Sign Up",
  },
];

function Signup() {
  return (
    <Box
      width="70%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
    >
      <Box width="22%">
        {leftFoods.map((item) => (
          <Box
            border="1px solid gray"
            borderRadius="10px"
            padding="10px"
            width="100%"
            height="250px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="30px 0px"
            cursor="pointer"
            key={item.title}
          >
            <Image src={item.image} alt={item.title} width="150px" />
            <Text marginTop="15px">{item.title}</Text>
          </Box>
        ))}
      </Box>

      <Box width="72%" marginTop="30px">
        <Box>
          <Text fontSize="3xl">
            Food Lover? Sign Up Now or{" "}
            <span
              style={{
                color: "#2184FF",
                cursor: "pointer",
              }}
            >
              Login With Facebook
            </span>
          </Text>

          <Text fontSize="14px" marginTop="15px">
            Discover tasty meat-free meals and dine instantly — no coupon
            payment, booking or printing is required.
          </Text>

          <Text fontSize="14px" marginTop="15px">
            KindMeal is a fun, exciting and cool new way for you to show your
            compassion towards animals. We collaborate with kind restaurants and
            cafes across the nation to bring you delicious meat-free foods that
            will not only help save precious animal lives, but improve your
            health and save your money at the same time!
          </Text>
        </Box>

        {/* Sign Up form start */}
        <Box marginTop="30px">
          <SignUpForm />
        </Box>
        {/* Sign Up form end */}
      </Box>
    </Box>
  );
}

export default Signup;
