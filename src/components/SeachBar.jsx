import { HStack, Icon, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

function SearchBar({ placeholderText, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value)
  };

  useEffect(() => {
  }, [searchTerm]);

  return (
    <HStack
      spacing={{ base: 4, md: 6 }}
      fontFamily={"Outfit"}
      justifyContent={"center"}
      color={"brand.white"}
      width={{ lg: "90%" }}
    >
      <Icon
        as={FiSearch}
        boxSize={{ base: 6, md: 8 }}
        alignSelf={"flex-start"}
      />
      <Input
        onChange={handleInputChange}
        value={searchTerm}
        variant={"flushed"}
        placeholder={placeholderText}
        paddingBottom={"0.9375rem"}
        borderBottomColor={"transparent"}
        _placeholder={{ opacity: "0.4979" }}
        fontSize={{ base: "normal", md: "2xl" }}
        focusBorderColor="unset"
        _focus={{
          focusBorderColor: "none",
          boxShadow: "none",
          borderBottomColor: "brand.greyishBlue",
        }}
        css={css`
          caret-color: #fc4747;
        `}
      />
    </HStack>
  );
}

export default SearchBar;
