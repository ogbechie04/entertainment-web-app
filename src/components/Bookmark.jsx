import { Box, IconButton, Icon } from "@chakra-ui/react";

/**
 *
 * TODO: add if bookmarked, then change to other icon
 */

function Bookmark() {
  return (
    <Box>
      <IconButton
        aria-label="bookmark-empty"
        bgColor="#00000080"
        borderRadius={"50%"}
        _hover={{ bgColor: "#FFF" }}
        icon={
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 14"
            boxSize={5}
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              stroke-width="1.5"
              fill="none"
            />
          </Icon>
        }
        sx={{
          "&:hover path": {
            stroke: "#000",
          },
        }}
      />
    </Box>
  );
}

export default Bookmark;
