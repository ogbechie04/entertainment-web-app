import { Box, IconButton, Icon } from "@chakra-ui/react";
import { BookmarkContext } from "./BookmarkContext";
import { useContext } from "react";

/**
 *
 * TODO: add if bookmarked, then change to other icon
 */

function BookmarkButton({ title }) {
  const { bookmarks, toggleBookmark } = useContext(BookmarkContext);

  const isBookmarked = bookmarks.includes(title);

  return (
    <Box>
      <IconButton
        aria-label="bookmark-empty"
        onClick={() => toggleBookmark(title)}
        bgColor="#00000080"
        borderRadius={"50%"}
        _hover={{ bgColor: isBookmarked ? '#000' : "#FFF" }}
        height={8}
        maxW={8}
        minW={8}
        icon={
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14">
            <path
              d={isBookmarked ? "M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" : "m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"}
              stroke="#FFF"
              stroke-width={isBookmarked ? 0 : "1.5"}
              fill={isBookmarked? "#FFF": "none"}
            />
          </Icon>
        }
        sx={{
          "&:hover path": {
            stroke: isBookmarked ? '#FFF' : "#000",
          },
        }}
      />
    </Box>
  );
}

export default BookmarkButton;
