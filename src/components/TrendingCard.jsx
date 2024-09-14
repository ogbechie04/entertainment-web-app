import { Box, HStack, Text, Image, Icon, IconButton } from "@chakra-ui/react";
import largeT from "../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg";
import mediumT from "../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg";
import smallT from "../assets/thumbnails/dark-side-of-the-moon/regular/small.jpg";
import oval from "../assets/oval.svg";
import tv from "../assets/icon-category-tv.svg";
import movie from "../assets/icon-category-movie.svg";
import emptyBookmark from "../assets/icon-bookmark-empty.svg";
import fullBookmark from "../assets/icon-bookmark-full.svg";

/**
 *
 * TODO: remove default values for props
 * TODO: if statement for if category is movie or tv show
 *
 */
function TrendingCard(props) {
  const {
    smallThumbnail = smallT,
    mediumThumbnail = mediumT,
    largeThumbnail = largeT,
    year = "2019",
    category = "Movie",
    rating = "PG",
  } = props;
  return (
    <>
    <Box
      position={"relative"}
      width={{ base: "240px", md: "470px" }}
      height={{ base: "140px", md: "230px" }}
      backgroundImage={{
        base: `url(${smallThumbnail})`,
        md: `url(${mediumThumbnail})`,
        lg: `url(${largeThumbnail})`,
      }}
      backgroundSize={"cover"}
      borderRadius={"lg"}
      color={"brand.white"}
    >
      <Box position={"absolute"} fontFamily={"Outfit"}>
        <HStack>
          <Text>{year}</Text>
          <Image src={oval} alt={"oval"} />
          <HStack>
            <Image src={tv} alt={"tv"} />
            <Text>{category}</Text>
          </HStack>
          <Image src={oval} alt={"oval"} />
          <Text>{rating}</Text>
        </HStack>
        <HStack cursor={"pointer"}>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z"
              fill="white"
            />
          </Icon>
          <Text>Play</Text>
        </HStack>
      </Box>
    </Box>
        <Box>
          <IconButton
            aria-label="bookmark-label"
            bgColor="black"
            opacity={0.500647}
            isRound={true}
            _hover={{ bgColor: "unset" }}
            icon={
              <Icon
                stroke-width="1.5"
                boxSize={8}
                viewBox="0 0 24 24"
              >
                <path
                  d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                  stroke="#FFF"
                  fill="none"
                />
              </Icon>
            }
          />
        </Box>
        </>
  );
}

export default TrendingCard;
