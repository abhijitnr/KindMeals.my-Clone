import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function MyRecipes() {
  const { cartdata } = useContext(AuthContext);

  return (
    <>
      <Box width="70%" margin="auto">
        <Text marginTop="30px" fontSize="3xl">
          Manage My Recipes
        </Text>

        <Text marginTop="15px" fontSize="md">
          Have yummy recipes to share? Feature your delicious masterpieces on
          KindMeal Recipes and share them with your friends to encourage
          creative meat-free dining!
        </Text>
      </Box>

      {cartdata.length === 0 ? (
        <Box width="70%" margin="auto" marginTop="30px" marginBottom="30px">
          <Link to="/mealdeals">
            <Button
              fontSize="18px"
              color="white"
              background="red.500"
              width="200px"
            >
              Add New Recipes
            </Button>
          </Link>
        </Box>
      ) : (
        <Box
          width="70%"
          margin="auto"
          display="grid"
          gridTemplateColumns="repeat(2,1fr)"
          gridTemplateRows="auto"
          gap="35px 0"
          marginTop="30px"
          marginBottom="50px"
        >
          {cartdata.map((item) => (
            <Box
              key={item.id}
              width="92%"
              height="520px"
              borderRadius="15px"
              backgroundColor="white"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            >
              <Image
                width="100%"
                height="260px"
                borderRadius="15px 15px 0px 0px"
                src={item.image}
                alt={item.title}
              />
              <Box padding="15px" borderBottom="1px solid gray">
                <Box display="flex" alignItems="center" gap="15px">
                  <Text fontSize="2xl" color="gray">
                    {item.title}
                    {" | "}
                  </Text>
                  <Text fontSize="md" color="gray">
                    {" "}
                    {item.tags}
                  </Text>
                </Box>

                <Text marginTop="25px" fontSize="sm">
                  {item.description}
                </Text>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    fontSize="18px"
                    color="white"
                    background="red.500"
                    width="50%"
                    marginBottom="-25px"
                  >
                    Successfully Redeemed
                  </Button>
                  <Image
                    width="30%"
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg"
                  />
                </Box>
              </Box>

              {/* Below get free coupon part */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                margin="6px 15px 0px 15px"
              >
                {/* Image tags box */}
                <Box
                  width="25%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Image
                    width="35px"
                    height="35px"
                    src="https://www.kindmeal.my/images/icon_egg.png"
                    alt="egg"
                  />
                  <Image
                    width="35px"
                    height="35px"
                    src="https://www.kindmeal.my/images/icon_milk.png"
                    alt="milk"
                  />
                  <Image
                    width="35px"
                    height="35px"
                    src="https://www.kindmeal.my/images/icon_alcohol_disabled.png"
                    alt="alcohol"
                  />
                </Box>
                {/* Discount box */}
                <Box width="50%" textAlign="center">
                  <Text marginTop="-8px" fontSize="sm" color="gray">
                    KindMeal Discount
                  </Text>
                  <Text marginTop="-7px" fontSize="2xl" color="green">
                    10% Off
                  </Text>
                </Box>
                {/* Expiry box */}
                <Box width="25%" textAlign="center">
                  <Text marginTop="-8px" fontSize="sm" color="gray">
                    Expires In
                  </Text>
                  <Text marginTop="-7px" fontSize="2xl" color="gray">
                    12 Days
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

export default MyRecipes;
