import { Avatar, Box, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import logo from "/assets/logo.svg";
import avatar from "/assets/image-avatar.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      backgroundColor={"brand.semiDarkBlue"}
      h={"100%"}
      maxHeight={{ lg: "60rem" }}
      display={"flex"}
      flexDir={{ lg: "column" }}
      alignItems={"center"}
      justifyContent={{ base: "space-between", lg: "center" }}
      w={{ base: "100%", lg: "fit-content" }}
      paddingBlockStart={{ base: 4, md: "1.3125rem", lg: "2.213rem" }}
      paddingBlockEnd={{ base: 4, md: 19, lg: 8 }}
      paddingInline={{ base: 4, lg: 7 }}
      paddingInlineStart={{ md: 6, lg: "none" }}
      paddingInlineEnd={{ md: 4, lg: "none" }}
      borderRadius={{ md: "0.625rem", lg: "1.25rem" }}
    >
      <Link to={"/home"}>
        <Image
          src={logo}
          alt="logo"
          w={"fit-content"}
          width={{ base: "1.5625rem", md: "unset" }}
          height={{ base: "1.25rem", md: "unset" }}
        />
      </Link>
      <Flex
        flexDir={{ lg: "column" }}
        w={"fit-content"}
        gap={{ md: 3, lg: 10 }}
        alignItems={"center"}
        marginBlockStart={{ lg: 74.99 }}
        marginBlockEnd={{ lg: "34.5rem" }}
        marginInline={{ base: 10, lg: 0 }}
      >
        {/* ----- Home Icon ----- */}
        <Link to={"/home"}>
          <IconButton
            aria-label="home-icon"
            bg={"unset"}
            boxSize={{ base: 4, md: 5 }}
            _hover={{ bg: "unset" }}
            sx={{
              "&:hover path": {
                fill: "#FC4747",
              },
            }}
            icon={
              <Icon viewBox="0 0 20 20" boxSize={{ base: 4, md: 5 }}>
                <path
                  d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                  fill={isActive('/home') ? "#FFFFFF" : "#5A698F"}
                />
              </Icon>
            }
          />
        </Link>
        {/* ----- Movies Icon ----- */}
        <Link to={"/movies"}>
          <IconButton
            bg={"unset"}
            boxSize={{ base: 4, md: 5 }}
            _hover={{ bg: "unset" }}
            aria-label="movies-icon"
            icon={
              <Icon viewBox="0 0 20 20" boxSize={{ base: 4, md: 5 }}>
                <path
                  d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                  fill={isActive('/movies') ? "#FFFFFF" : "#5A698F"}
                />
              </Icon>
            }
            sx={{
              "&:hover path": {
                fill: "#FC4747",
              },
            }}
          />
        </Link>
        {/* ----- TV Series Icon ----- */}
        <Link to={"/tv-series"}>
          <IconButton
            bg={"unset"}
            boxSize={{ base: 4, md: 5 }}
            _hover={{ bg: "unset" }}
            aria-label="tvseries-icon"
            icon={
              <Icon viewBox="0 0 20 20" boxSize={{ base: 4, md: 5 }}>
                <path
                  d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                  fill={isActive('/tv-series') ? "#FFFFFF" : "#5A698F"}
                />
              </Icon>
            }
            sx={{
              "&:hover path": {
                fill: "#FC4747",
              },
            }}
          />
        </Link>
        {/* ----- Bookmark Icon ----- */}
        <Link to={"/bookmarks"}>
          <IconButton
            bg={"unset"}
            boxSize={{ base: 4, md: 5 }}
            _hover={{ bg: "unset" }}
            aria-label="bookmark-icon"
            icon={
              <Icon viewBox="0 0 20 20" boxSize={{ base: 4, md: 5 }}>
                <path
                  d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                  fill={isActive('/bookmarks') ? "#FFFFFF" : "#5A698F"}
                />
              </Icon>
            }
            sx={{
              "&:hover path": {
                fill: "#FC4747",
              },
            }}
          />
        </Link>
      </Flex>
      <Box border={"1px solid white"} w={"fit-content"} borderRadius={"50%"}>
        <Avatar
          name="Dan Abrahmov"
          src={avatar}
          w={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
          h={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
        />
      </Box>
    </Box>
  );
}

export default NavBar;
