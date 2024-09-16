import { Box, VStack, HStack, Text, Image, Heading } from "@chakra-ui/react";
import largeT from "../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg";
import mediumT from "../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg";
import smallT from "../assets/thumbnails/dark-side-of-the-moon/regular/small.jpg";
import Bookmark from "./Bookmark";
import oval from "../assets/oval.svg";
import tv from "../assets/icon-category-tv.svg";
import movie from "../assets/icon-category-movie.svg";
import PlayButton from "./PlayButton";

function MovieCard(props) {
  const {
    smallThumbnail = smallT,
    mediumThumbnail = mediumT,
    largeThumbnail = largeT,
    year = "2019",
    category = "Movie",
    rating = "PG",
    title = "Bed Chem",
  } = props;
  return (
    <Box>
      <Box
        position={"relative"}
        width={{ base: "10.25rem", md: "13.75rem", lg: "17.5rem" }}
        height={{ base: "6.875rem", md: "8.75rem", lg: "10.875rem" }}
        backgroundImage={{
          base: `url(${smallThumbnail})`,
          md: `url(${mediumThumbnail})`,
          lg: `url(${largeThumbnail})`,
        }}
        backgroundSize={"cover"}
        borderRadius={"lg"}
        color={"brand.white"}
        cursor={"pointer"}
      >
        <Box
          position={"absolute"}
          fontFamily={"Outfit"}
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ md: "0.5rem", lg: "0.9375rem" }}
          paddingInlineEnd={{ base: 2, md: 4 }}
          paddingBlockStart={{ base: 2, md: 4 }}
          _hover={{ ".play": { visibility: "visible", opacity: 1 } }}
        >
          <Box alignSelf={"flex-end"}>
            <Bookmark />
          </Box>
          <Box
            className="play"
            visibility={"hidden"}
            opacity={0}
            transition="opacity 0.3s ease"
            display={{ base: "none", md: "block" }}
            alignSelf={"center"}
          >
            <PlayButton />
          </Box>
        </Box>
      </Box>
      <VStack
        alignSelf={{ base: "flex-start", md: "flex-end" }}
        alignItems={"flex-start"}
        spacing={{base: '0.25rem', md: "0.3125rem"}}
        fontFamily={"Outfit"}
      >
        <HStack opacity={0.75}>
          <Text fontSize={{ base: "0.6875rem", md: "0.8125rem" }}>{year}</Text>
          <Image src={oval} alt={"oval"} />
          <HStack>
            <Image src={category === "Movie" ? movie : tv} alt={"tv"} />
            <Text fontSize={{ base: "0.6875rem", md: "0.8125rem" }}>
              {category}
            </Text>
          </HStack>
          <Image src={oval} alt={"oval"} />
          <Text fontSize={{ base: "0.6875rem", md: "0.8125rem" }}>
            {rating}
          </Text>
        </HStack>
        <Heading
          fontFamily={"Outfit"}
          fontSize={{ base: "sm", md: "large" }}
          fontWeight={"normal"}
          lineHeight={"none"}
        >
          {title}
        </Heading>
      </VStack>
    </Box>
  );
}

export default MovieCard;
