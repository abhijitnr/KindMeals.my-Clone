import { Box, Button } from "@chakra-ui/react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = createArrayOfSize(totalPages).map((a, i) => (
    <Button
      margin="0 10px"
      backgroundColor="blue.200"
      color="red"
      onClick={() => handlePageChange(i + 1)}
      disabled={currentPage === i + 1}
    >
      {i + 1}
    </Button>
  ));
  return <Box>{pages}</Box>;
}

export default Pagination;
