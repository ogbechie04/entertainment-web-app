import { Button } from "@chakra-ui/react";

function CustomButton(props) {
  const { buttonText='Toothbrush' } = props;

  return (
  <Button fontFamily={'Outfit'} bg={'brand.red'} textColor={'brand.white'} borderRadius={6} fontWeight={'normal'} width={{base: '279px', md: '336px'}} paddingBlockStart={3.5} paddingBlockEnd={'15px'} transition="background-color 0.3s ease" _hover={{bgColor:'brand.white', textColor:'brand.semiDarkBlue'}}>{buttonText}</Button>
  )
}

export default CustomButton;
