import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const getKindMeals = (params = {}) => {
  return axios.get(`https://my-json-servers.herokuapp.com/meals`, {
    params: {
      _page: params.page,
      _limit: params.limit,
    },
  });
};

function MealDeals() {
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getKindMeals({ page, limit: 6 })
      .then((data) => {
        setMeals(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <Box width="100%" paddingBottom="100px">
      {/* Top part */}
      <Box width="100%" height="210px" backgroundColor="gray.100">
        <Box width="68%" margin="auto" padding="15px 0">
          <Text fontSize="3xl" color="blackAlpha.700">
            Meat-Free Deals | Restaurants In India
          </Text>

          <Text fontSize="16px" marginTop="10px">
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </Text>

          <Text fontSize="16px" marginTop="15px">
            Download our mobile app now to easily get coupons and start dining
            in a few seconds. Effortlessly save lives, health, environment and
            money now!
          </Text>
        </Box>
      </Box>

      {/* Meal deal products  */}
      {/* Pagination */}
      <Box width="70%" margin="auto" marginTop="50px">
        <Pagination
          totalPages={7}
          currentPage={page}
          handlePageChange={(page) => setPage(page)}
        />
      </Box>

      <Box
        width="70%"
        margin="auto"
        display="grid"
        gridTemplateColumns="repeat(2,1fr)"
        gridTemplateRows="auto"
        gap="35px 0"
        marginTop="20px"
      >
        {meals.map((item) => (
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

              <Text marginTop="20px" fontSize="sm">
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
                  marginBottom="-10px"
                >
                  Get FREE Coupon
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
              margin="10px 10px 0px 10px"
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
                <Text marginTop="-7px" fontSize="2xl" color="red">
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
      {/* Pagination */}
      <Box width="70%" margin="auto" marginTop="30px">
        <Pagination
          totalPages={7}
          currentPage={page}
          handlePageChange={(page) => setPage(page)}
        />
      </Box>
    </Box>
  );
}

export default MealDeals;
