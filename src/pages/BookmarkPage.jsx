import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SeachBar";
import MovieCard from "../components/MovieCard";
import movies from "../../src/data.json";
import { BookmarkContext } from "../components/BookmarkContext";
import { useContext, useState } from "react";
import useSearch from "../hooks/useSearch";

function BookmarkPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { bookmarks } = useContext(BookmarkContext);

  const bookmarkedMovies = movies.filter((movie) =>
    bookmarks.includes(movie.title)
  );

  const filteredMovies = useSearch(bookmarkedMovies, searchTerm);

  return (
    <Box
      backgroundColor={"brand.darkBlue"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      height={{ base: "100vh", lg: "100%" }}
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
        <SearchBar
          placeholderText={"Search for bookmarked shows"}
          onSearch={setSearchTerm}
        />
        {filteredMovies.length === 0 ? (
          <Text
            color={"brand.white"}
            fontSize={{ base: "lg", md: "2xl" }}
            textAlign={"center"}
            marginBlockStart={{ base: 6, md: "2.0625rem", lg: "2.125rem" }}
          >
            No results found!
          </Text>
        ) : (
          <>
            <Text
              display={bookmarkedMovies.length === 0 ? "block" : "none"}
              color={"brand.white"}
              fontSize={{ base: "lg", md: "2xl" }}
              textAlign={"center"}
              marginBlockStart={{ base: 6, md: "2.0625rem", lg: "2.125rem" }}
            >
              No bookmarked movies yet!
            </Text>
            {/* ----- bookmared movies section ----- */}
            <Box
              marginBlockStart={{ base: 6, md: "2.0625rem", lg: "2.125rem" }}
              maxWidth={"100%"}
              display={
                filteredMovies.filter((movie) => movie.category === "Movie")
                  .length === 0
                  ? "none"
                  : "flex"
              }
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
                Bookmarked Movies
              </Heading>
              <SimpleGrid
                columns={{ base: 2, md: 3, lg: 4 }}
                maxWidth={"100%"}
                paddingInlineEnd={"1.5625rem"}
                columnGap={{ base: "0.9375rem", md: "1.8125rem", lg: "2.5rem" }}
                rowGap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
              >
                {filteredMovies
                  .filter((movie) => movie.category === "Movie")
                  .map((movie, index) => {
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
            {/* ----- bookmarked TV series section ----- */}
            <Box
              marginBlockStart={{ base: 6, md: "12", lg: "10" }}
              maxWidth={"100%"}
              display={
                filteredMovies.filter((movie) => movie.category === "TV Series")
                  .length === 0
                  ? "none"
                  : "flex"
              }
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
                Bookmarked TV Series
              </Heading>
              <SimpleGrid
                columns={{ base: 2, md: 3, lg: 4 }}
                maxWidth={"100%"}
                paddingInlineEnd={"1.5625rem"}
                columnGap={{ base: "0.9375rem", md: "1.8125rem", lg: "2.5rem" }}
                rowGap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
              >
                {filteredMovies
                  .filter((movie) => movie.category === "TV Series")
                  .map((movie, index) => {
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
            </Box>{" "}
          </>
        )}
      </Box>
    </Box>
  );
}

export default BookmarkPage;
