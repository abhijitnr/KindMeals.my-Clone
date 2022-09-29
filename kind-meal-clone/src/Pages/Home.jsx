import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  amazingSuperheroes,
  discoverResturents,
  homes,
  latestNews,
  petFinderIcon,
  yummylicious,
} from "./data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Forst part start */}
      <Box width="100%" backgroundColor="gray.200" paddingBottom="60px">
        <Box width="70%" margin="auto">
          <Box
            backgroundColor="white"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
          >
            <Box
              width="100%"
              height="370px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="65%">
                <Image
                  src="https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg"
                  alt="poster"
                  width="100%"
                  height="370px"
                />
              </Box>
              <Box width="35%">
                <Image
                  src="https://www.kindmeal.my/photos/shop/4/498-3527-m.jpg"
                  alt="poster brand"
                  width="100%"
                  height="370px"
                />
              </Box>
            </Box>

            <Box
              width="100%"
              height="140px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
            >
              {homes.map((item) => (
                <Image
                  border="1px solid gray"
                  key={item.image}
                  src={item.image}
                  alt="poster icon"
                  width="130px"
                  height="100px"
                />
              ))}
            </Box>
          </Box>

          {/* Latest news div */}
          <Box
            marginTop="50px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding="10px 20px"
            backgroundColor="white"
          >
            <Text fontWeight="bold" color="blackAlpha.700" fontSize="2xl">
              Latest News & Videos
            </Text>
            <Box
              width="100%"
              height="280px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="-15px"
              cursor="pointer"
            >
              {latestNews.map((item) => (
                <Box
                  key={item.image}
                  width="18.5%"
                  height="240px"
                  textAlign="center"
                >
                  <Image
                    src={item.image}
                    alt="latest news"
                    width="100%"
                    height="200px"
                    borderRadius="8px"
                  />
                  <Text marginTop="10px" color="gray" fontSize="xs">
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Yummylicious moments div */}
          <Box
            marginTop="50px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding="10px 20px"
            backgroundColor="white"
          >
            <Text fontWeight="bold" color="blackAlpha.700" fontSize="2xl">
              Yummylicious Moments
            </Text>
            <Box
              width="100%"
              height="280px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="-15px"
              cursor="pointer"
            >
              {yummylicious.map((item) => (
                <Box
                  key={item.image}
                  width="18.5%"
                  height="240px"
                  textAlign="center"
                >
                  <Image
                    src={item.image}
                    alt="latest news"
                    width="100%"
                    height="200px"
                    borderRadius="8px"
                  />
                  <Text
                    marginTop="10px"
                    color="gray"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {item.name}
                  </Text>
                  <Text color="gray" fontSize="xs">
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Discover resturents */}
          <Box
            marginTop="50px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding="10px 20px"
            backgroundColor="white"
          >
            <Text fontWeight="bold" color="blackAlpha.700" fontSize="2xl">
              Discover Restaurants
            </Text>
            <Box
              width="100%"
              height="280px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="-15px"
              cursor="pointer"
            >
              {discoverResturents.map((item) => (
                <Box
                  key={item.image}
                  width="18.5%"
                  height="240px"
                  textAlign="center"
                >
                  <Image
                    src={item.image}
                    alt="latest news"
                    width="100%"
                    height="200px"
                    borderRadius="8px"
                  />
                  <Text
                    marginTop="10px"
                    fontWeight="bold"
                    color="gray"
                    fontSize="sm"
                  >
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Amazing superheroes */}
          <Box
            marginTop="50px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding="10px 20px"
            backgroundColor="white"
          >
            <Text fontWeight="bold" color="blackAlpha.700" fontSize="2xl">
              Amazing Superheroes
            </Text>
            <Box
              width="100%"
              height="280px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="-15px"
              cursor="pointer"
            >
              {amazingSuperheroes.map((item) => (
                <Box
                  key={item.image}
                  width="18.5%"
                  height="220px"
                  textAlign="center"
                >
                  <Image
                    src={item.image}
                    alt="latest news"
                    width="100%"
                    height="200px"
                    borderRadius="8px"
                  />
                  <Text
                    marginTop="10px"
                    fontWeight="bold"
                    color="gray"
                    fontSize="sm"
                  >
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* First part completed */}

      {/* After amazing heroes part start */}
      <Box width="100%" backgroundColor="white" padding="70px 0px">
        <Box width="70%" margin="auto" textAlign="center">
          <Text fontSize="4xl" color="gray.600">
            Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            marginTop="10px"
          >
            <Text color="gray" fontSize="2xl">
              Brought to you by
            </Text>
            <Image
              src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
              alt="pet finder logo"
              height="50px"
              cursor="pointer"
            />
          </Box>

          <Text marginTop="40px" fontSize="28px" color="gray">
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </Text>
        </Box>

        <Box
          width="70%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          marginTop="50px"
        >
          {petFinderIcon.map((item) => (
            <Box
              key={item.image}
              width="24%"
              textAlign="center"
              border="1px solid gray"
              padding="20px"
              borderRadius="15px"
            >
              <Image
                cursor="pointer"
                margin="auto"
                src={item.image}
                alt={item.title}
              />
              <Text
                fontWeight="bold"
                fontSize="19px"
                color="blackAlpha.700"
                marginTop="15px"
              >
                {item.title}
              </Text>
              <Text
                color="gray"
                marginTop="10px"
                fontWeight="bold"
                fontSize="sm"
              >
                {item.name}
              </Text>
            </Box>
          ))}
        </Box>

        <Box width="70%" margin="auto" textAlign="center" marginTop="50px">
          <Text fontSize="21px" color="gray">
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </Text>
        </Box>

        <Box
          width="30%"
          margin="auto"
          color="white"
          marginTop="70px"
          height="80px"
        >
          <Link to="/signup">
            <Button
              backgroundColor="red"
              width="100%"
              height="100%"
              fontSize="35px"
              fontWeight="bold"
            >
              Join KindMeal Now
            </Button>
          </Link>
        </Box>

        <Box width="70%" margin="auto" textAlign="center" marginTop="60px">
          <Text color="gray" fontSize="4xl">
            Featured On
          </Text>
          <Image
            src="https://www.kindmeal.my/images/media-feature2.png"
            alt="Featured logo"
          />
        </Box>
      </Box>
      {/* After amazing heroes part end */}
    </>
  );
}

export default Home;
