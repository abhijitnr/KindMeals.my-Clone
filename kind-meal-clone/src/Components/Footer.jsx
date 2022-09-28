import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/layout";

const general = [
  { title: "Home" },
  { title: "Sign Up" },
  { title: "Businesses / Restaurateurs" },
  { title: "Advertising" },
  { title: "About KindMeal.my" },
  { title: "Help & FAQ" },
  { title: "Terms & Conditions" },
  { title: "Inspiring Partners" },
  { title: "Lifestyle Ambassadors" },
  { title: "Jobs & Careers" },
  { title: "Contact Us" },
];

const features = [
  { title: "Meat-Free Deals" },
  { title: "Tasty Menus" },
  { title: "Kind Moments" },
  { title: "Meat-Free Recipes" },
  { title: "Member Recommendations" },
  { title: "Featured Restaurants" },
  { title: "Vegetarian & Vegan Directory" },
  { title: "Food Map" },
  { title: "Become A Superhero" },
  { title: "Vegan News & Vegetarian Articles" },
  { title: "Latest Comments" },
];

const socialmedia = [
  { title: "KindMeal Widget" },
  { title: "Facebook" },
  { title: "Twitter" },
  { title: "Instagram" },
];

const mobile = [{ title: "iPhone & iPod App" }, { title: "Android App" }];

const excitingPromo = [
  { title: "Gadhimai: Ending Mass Slaughter" },
  { title: "Free Meals" },
  { title: "Food Bloggers" },
  { title: "Uber CHIRP" },
  { title: "Jane Goodall Contest" },
  { title: "Win Digi iPhone 6" },
  { title: "Feed The Poor" },
  { title: "Win Superhero Gifts" },
  { title: "Win an iPad Mini 3" },
];

const petFinder = [
  { title: "Adopt A Pet" },
  { title: "Smartphone Apps" },
  { title: "WAGazine" },
  { title: "Discussion Forum" },
  { title: "Medical Fund" },
];

function Footer() {
  return (
    <Box width="100%">
      {/* Footer poster start */}
      <Box
        width="100%"
        height="auto"
        backgroundColor="#ECECEC"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" />
      </Box>
      {/* Footer poster end */}

      {/* Footer 5 div start */}
      <Box
        width="100%"
        backgroundColor="#2BB673"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <Box
          width="70%"
          height="280px"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          color="white"
        >
          {/* This is for general div footer */}
          <Box width="20%">
            <Text fontWeight="bold" fontSize="sm">
              General
            </Text>
            {general.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}
          </Box>

          <Box width="20%">
            <Text fontWeight="bold" fontSize="sm">
              Features
            </Text>
            {features.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}
          </Box>

          <Box width="20%">
            <Text fontWeight="bold" fontSize="sm">
              Social Media
            </Text>
            {socialmedia.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}
          </Box>

          <Box width="20%">
            <Text fontWeight="bold" fontSize="sm">
              Mobile
            </Text>
            {mobile.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}

            <Text marginTop="10px" fontWeight="bold" fontSize="sm">
              Exciting Promos
            </Text>
            {excitingPromo.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}
          </Box>

          <Box width="20%">
            <Text fontWeight="bold" fontSize="sm">
              PetFinder.my
            </Text>
            {petFinder.map((item) => (
              <Text key={item.title} cursor="pointer" fontSize="xs">
                {item.title}
              </Text>
            ))}
          </Box>
        </Box>

        {/* Footer copyrights start */}
        <Box textAlign="center" color="white">
          <Text fontSize="9px">
            Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
          </Text>
          <Text fontSize="9px">
            This website promotes compassionate, meat-free dining experience.
            Some food may contain eggs, dairy products or alcohol, please view
            individual listings for details.
          </Text>
        </Box>
        {/* Footer copyrights end */}
      </Box>
      {/* Footer 5 div end */}
    </Box>
  );
}

export default Footer;
