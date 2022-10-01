import {
  Box,
  Flex,
  Image,
  HStack,
  Spacer,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { LinkIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/mealdeals",
    title: "Meal Deals",
  },
  {
    path: "/kindmoments",
    title: "KindMoments",
  },
  {
    path: "/hotpicks",
    title: "Hot Picks",
  },
  {
    path: "/recipes",
    title: "Recipes",
  },
  {
    path: "/directory",
    title: "Directory",
  },
  {
    path: "/articles",
    title: "Articles",
  },
  {
    path: "/help",
    title: "Help",
  },
];

const signupModal = [
  {
    image: "https://www.kindmeal.my/images/join_normal.png",
    title: "Food Lover",
    description:
      "Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.",
  },
  {
    image: "https://www.kindmeal.my/images/join_shop.png",
    title: "Restaurant / Shop Owner",
    description:
      "List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.",
  },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100%" backgroundColor="white">
      {/* Navbar 1 start */}
      <Box width="70%" margin="auto" backgroundColor="white">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Link to="/">
              <Image
                src="https://www.kindmeal.my/images/logo-kindmeal.png"
                alt="Kind Meal Logo"
              />
            </Link>
          </Box>

          <Spacer />

          <HStack>
            <Box
              backgroundColor="gray.300"
              width="40px"
              height="40px"
              display="flex"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="25px"
            >
              <LinkIcon />
            </Box>

            <Box
              backgroundColor="gray.300"
              width="40px"
              height="40px"
              display="flex"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="25px"
            >
              <Icon as={FaFacebookF} />
            </Box>

            <Box
              backgroundColor="gray.300"
              width="40px"
              height="40px"
              display="flex"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="25px"
            >
              <Icon as={FaTwitter} />
            </Box>
          </HStack>

          <Spacer />

          <HStack>
            <Text fontSize="xs">Login</Text>
            <Link to="/login">
              <Button colorScheme="blue" h="6" p="0 1">
                Facebook
              </Button>
            </Link>

            <Link to="/login">
              <Button color="white" background="blackAlpha.700" h="6" p="0 1">
                Email
              </Button>
            </Link>

            <Text fontSize="xl">|</Text>
            {/* Sign Up Modal start */}
            <Text cursor="pointer" onClick={onOpen} fontSize="xs">
              Sign Up
            </Text>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Box textAlign="center">
                    <Image
                      src="https://www.kindmeal.my/images/logo-kindmeal.png"
                      alt="Kind meal logo"
                    />
                    <Text
                      color="blackAlpha.700"
                      fontSize="2xl"
                      marginTop="10px"
                    >
                      Join KindMeal For FREE Now
                    </Text>
                    <Text color="gray" fontSize="15px">
                      Please select the type of membership to proceed
                    </Text>
                  </Box>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    {signupModal.map((item) => (
                      <Link key={item.image} to="/signup">
                        <Box
                          width="100%"
                          height="150px"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          border="1px solid gray"
                          padding="5px"
                          marginBottom="15px"
                          borderRadius="15px"
                          cursor="pointer"
                          onClick={onClose}
                        >
                          <Box width="30%">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width="100%"
                            />
                          </Box>
                          <Box width="67%">
                            <Text color="blackAlpha.700" fontWeight="bold">
                              {item.title}
                            </Text>
                            <Spacer />
                            <Text
                              marginTop="10px"
                              color="gray"
                              width="98%"
                              fontSize="xs"
                            >
                              {item.description}
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </ModalBody>

                <ModalFooter>
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Link to="/login">
                      <Text onClick={onClose} cursor="pointer">
                        Member Login
                      </Text>
                    </Link>
                    {/* Login Modal */}
                    <Text cursor="pointer">Forgot Password?</Text>
                  </Box>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* Sign Up modal end */}
          </HStack>
        </Flex>
      </Box>
      {/* Navbar 1 end */}

      {/* Navbar 2 start */}
      <Box
        width="100%"
        backgroundColor="#2BB673"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="40px"
      >
        <Box
          width="70%"
          margin="auto"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Flex
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {links.map((item) => (
              <Box
                fontSize="20px"
                color="white"
                height="40px"
                padding="5px 1rem"
                key={item.path}
              >
                <Link to={item.path}>
                  <Text>{item.title}</Text>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      {/* Navbar 2 end */}
    </Box>
  );
}

export default Navbar;
