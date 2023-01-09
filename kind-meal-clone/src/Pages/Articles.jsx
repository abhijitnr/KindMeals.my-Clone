import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Button, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import Pagination from "./Pagination";

const getArticles = (params = {}) => {
  return axios.get(`https://my-json-server-ke2r.onrender.com/artiles`, {
    params: {
      _page: params.page,
      _limit: params.limit,
    },
  });
};

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getArticles({ page, limit: 4 })
      .then((res) => {
        setLoading(false);
        setArticles(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return (
      <Stack my={20}>
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
        <Skeleton height="25px" />
      </Stack>
    );
  }

  // console.log(articles);

  return (
    <>
      <Box width="100%" height="190px" backgroundColor="gray.100">
        <Box width="68%" margin="auto" padding="10px 0">
          <Text fontSize="3xl" color="blackAlpha.700">
            Yummy News, Articles & Videos
          </Text>

          <Text fontSize="16px" marginTop="25px">
            Want to keep updated on the latest news of delicious meat-free meals
            and adorable animals? Check out this section for interesting daily
            happenings and articles that will melt your tummy (and heart too).
          </Text>

          <Text fontSize="16px" marginTop="15px">
            You can also follow our Facebook Page or Twitter for more news and
            updates.
          </Text>
        </Box>
      </Box>
      <Box width="70%" margin="auto" marginBottom="100px">
        {/* Pagination */}
        <Box width="100%" margin="auto" marginTop="50px">
          <Pagination
            totalPages={7}
            currentPage={page}
            handlePageChange={(page) => setPage(page)}
          />
        </Box>

        {articles.map((item) => (
          <Box
            key={item.image}
            width="100%"
            height="300px"
            display="flex"
            justifyContent="center"
            // alignItems="center"
            border="1px solid gray"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            margin="40px 0px"
            borderRadius="15px"
          >
            <Box width="45%">
              <Image
                width="100%"
                height="298px"
                src={item.image}
                alt={item.title}
                borderRadius="15px 0px 0px 15px"
              />
            </Box>

            <Box width="55%" padding="35px">
              <Text fontSize="2xl">{item.title}</Text>
              <Text marginTop="20px" fontSize="md">
                {item.tags}
              </Text>

              <Button
                marginTop="30px"
                color="white"
                fontWeight="bold"
                backgroundColor="red"
              >
                View Article
              </Button>
            </Box>
          </Box>
        ))}

        {/* Pagination */}
        <Box width="100%" margin="auto" marginTop="30px">
          <Pagination
            totalPages={7}
            currentPage={page}
            handlePageChange={(page) => setPage(page)}
          />
        </Box>
      </Box>
    </>
  );
}

export default Articles;
