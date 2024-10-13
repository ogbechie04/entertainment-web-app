import { Box, HStack, Text, Image, VStack, Heading } from "@chakra-ui/react";
import largeT from "/assets/thumbnails/dark-side-of-the-moon/regular/large.jpg";
import mediumT from "/assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg";
import smallT from "/assets/thumbnails/dark-side-of-the-moon/regular/small.jpg";
import oval from "/assets/oval.svg";
import tv from "/assets/icon-category-tv.svg";
import movie from "/assets/icon-category-movie.svg";
import BookmarkButton from "./BookmarkButton";
import PlayButton from "./PlayButton";

/**
 *
 * TODO: remove default values for props
 * TODO: if statement for if category is movie or tv show
 *
 */
function TrendingCard(props) {
  const {
    smallThumbnail = smallT,
    largeThumbnail = largeT,
    year = "2019",
    category = "TV",
    rating = "PG",
    title = "Bed Chem",
  } = props;
  return (
    <Box
      position={"relative"}
      width={{ base: "15rem", md: "29.375rem" }}
      height={{ base: "8.75rem", md: "14.375rem" }}
      backgroundImage={{
        base: `url(${smallThumbnail})`,
        md: `url(${largeThumbnail})`,
        lg: `url(${largeThumbnail})`,
      }}
      backgroundSize={"cover"}
      borderRadius={"lg"}
      color={"brand.white"}
      flex={'0 0 auto'}
    >
      <Box
        position={"absolute"}
        fontFamily={"Outfit"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "space-between", md: "unset" }}
        paddingInlineStart={{ base: 4, md: 6 }}
        paddingInlineEnd={{ base: 2, md: 6 }}
        paddingBlockStart={{ base: 2, md: 4 }}
        paddingBlockEnd={{ base: 4, md: 6 }}
        _hover={{ ".play": { visibility: "visible", opacity: 1 } }}
        cursor={"pointer"}
      >
        <VStack
          alignSelf={{ base: "flex-start", md: "flex-end" }}
          alignItems={"flex-start"}
          spacing={"0.1875rem"}
        >
          <HStack opacity={0.75} color={'brand.white'}>
            <Text fontSize={{ base: "xs", md: "0.9375rem" }}>{year}</Text>
            <Image src={oval} alt={"oval"} />
            <HStack>
              <Image
                src={category === "Movie" ? movie : tv}
                alt={category === "movie" ? "movie" : "tv"}
              />
              <Text fontSize={{ base: "xs", md: "0.9375rem" }}>{category}</Text>
            </HStack>
            <Image src={oval} alt={"oval"} />
            <Text fontSize={{ base: "xs", md: "0.9375rem" }}>{rating}</Text>
          </HStack>
          <Heading
            fontFamily={"Outfit"}
            fontSize={{ base: "0.9375rem", md: "2xl" }}
            fontWeight={"normal"}
            lineHeight={"none"}
            color={'brand.white'}
          >
            {title}
          </Heading>
        </VStack>
        <Box
          className="play"
          visibility={"hidden"}
          opacity={0}
          transition="opacity 0.3s ease"
          display={{ base: "none", md: "block" }}
          position={"absolute"}
          right={'38%'}
        >
          <PlayButton />
        </Box>
        <Box alignSelf={"flex-start"} marginInlineStart={"auto"}>
          <BookmarkButton title={title} />
        </Box>
      </Box>
    </Box>
  );
}

export default TrendingCard;
