import { HStack, Icon, Text } from "@chakra-ui/react";

function PlayButton() {
  return (
    <HStack
      cursor={"pointer"}
      bgColor={"#ffffff40"}
      paddingBlock={"0.5625rem"}
      paddingInlineStart={"0.5625rem"}
      paddingInlineEnd={{ base: "1.25rem", md: 6 }}
      borderRadius={"1.78125rem"}
      spacing={{ base: "0.375rem", md: "1.1875rem" }}
    >
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
  );
}

export default PlayButton;
