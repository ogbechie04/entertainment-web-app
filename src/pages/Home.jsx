import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SeachBar";

function Home() {
  return (
    <Box backgroundColor={"brand.darkBlue"} display={'flex'} flexDirection={{base: 'column', lg: 'row'}}>
      <Box width={{lg: 'fit-content'}} paddingBlockStart={{md: '1.4375rem', lg: 8}} paddingInlineStart={{md: '1.5625rem', lg: 8}} paddingInlineEnd={{md: 6, lg: 'unset'}}>
        <NavBar />
      </Box>
      <Box>
        <SearchBar placeholderText={"Search for a movie"} />
      </Box>
    </Box>
  );
}

export default Home;
