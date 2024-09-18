import { Box, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SeachBar";
import movies from "../../src/data.json";
import TrendingCard from "../components/TrendingCard";

function Home() {
  console.log(movies);
  console.log(movies[0]);
  console.log(movies[0].title);
  console.log(movies[0].thumbnail.trending.small);

  return (
    <Box
      backgroundColor={"brand.darkBlue"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100%"}
    >
      <Box
        width={{ lg: "fit-content" }}
        paddingBlockStart={{ md: "1.4375rem", lg: 8 }}
        paddingInlineStart={{ md: "1.5625rem", lg: 8 }}
        paddingInlineEnd={{ md: 6, lg: "unset" }}
      >
        <NavBar />
      </Box>
      <Box
        width={"100%"}
        marginBlockStart={{ base: 6, md: "2.0625rem", lg: 16 }}
        marginInlineStart={{ base: 4, md: "1.5625rem", lg: 9 }}
      >
        <SearchBar placeholderText={"Search for a movie"} />
        {/* ----- trending section ----- */}
        <Box marginBlockStart={{ base: 6, md: "2.0625rem", lg: "2.125rem" }}>
          <Heading
            fontSize={{ base: "xl", md: "2rem" }}
            color={"brand.white"}
            letterSpacing={{ base: "-0.312px", md: "-0.5px" }}
            fontWeight={"normal"}
            fontFamily={"Outfit"}
          >
            Trending
          </Heading>
        </Box>
        <Flex gap={10} overflowX={'auto'} whiteSpace={'nowrap'} wrap={'nowrap'} width={'100vw'}>
          {movies.map((movie, index) => (
            <TrendingCard
              key={index}
              title={movie.title}
              category={movie.category}
              rating={movie.rating}
              year={movie.year}
              smallThumbnail={movie?.thumbnail?.trending?.small}
              largeThumbnail={movie?.thumbnail?.trending?.large}
            />
          ))}
        </Flex>
        <TrendingCard />
        {/* ----- recommended for you ----- */}
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Home;
