import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SeachBar";
import movies from "../../src/data.json";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
  return (
    <Box
      backgroundColor={"brand.darkBlue"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100%"}
      width={"100vw"}
      paddingBlockEnd={{ base: "3.25rem", md: "3.5rem", lg: "3.8125rem" }}
    >
      <Box
        width={{ lg: "fit-content" }}
        maxWidth={"100%"}
        paddingBlockStart={{ md: "1.4375rem", lg: 8 }}
        paddingInlineStart={{ md: "1.5625rem", lg: 8 }}
        paddingInlineEnd={{ md: 6, lg: "unset" }}
      >
        <NavBar />
      </Box>
      <Box
        flex={1}
        maxWidth={"100%"}
        marginBlockStart={{ base: 6, md: "2.0625rem", lg: 16 }}
        marginInlineStart={{ base: 4, md: "1.5625rem", lg: 9 }}
        overflow={"hidden"}
      >
        <SearchBar placeholderText={"Search for movies"} />
        {/* ----- movies section ----- */}
        <Box
          marginBlockStart={{ base: 6, md: "2.0625rem", lg: "2.125rem" }}
          maxWidth={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ base: "1rem", md: "1.5625rem" }}
        >
          <Heading
            fontSize={{ base: "xl", md: "2rem" }}
            color={"brand.white"}
            letterSpacing={{ base: "-0.312px", md: "-0.5px" }}
            fontWeight={"normal"}
            fontFamily={"Outfit"}
          >
            Movies
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4 }}
            maxWidth={"100%"}
            paddingInlineEnd={"1.5625rem"}
            columnGap={{ base: "0.9375rem", md: "1.8125rem", lg: "2.5rem" }}
            rowGap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
          >
            {movies.filter((movie) => movie.category === 'Movie').map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  category={movie.category}
                  rating={movie.rating}
                  year={movie.year}
                  smallThumbnail={movie?.thumbnail?.regular?.small}
                  mediumThumbnail={movie?.thumbnail?.regular?.medium}
                  largeThumbnail={movie?.thumbnail?.regular?.large}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default MoviesPage;
