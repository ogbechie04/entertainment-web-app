import {
  Box,
  Text,
  Image,
  VStack,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo.svg";
import { css } from "@emotion/react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import { FiCheckCircle } from "react-icons/fi";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email Address is required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let valid = true;

    if (!email) {
      setEmailError("Email Address is required");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
        render: () => (
          <Box
            color="#161D2F"
            p={3}
            bg="#FFFFFF"
            borderRadius="md"
            display={"flex"}
            alignItems={"center"}
            gap={4}
          >
            <Icon as={FiCheckCircle} />
            <Text>Login successful!</Text>
          </Box>
        ),
      });
      navigate("/home");
    } catch (error) {
      console.log(`Unable to login: ${error}`);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      backgroundColor={"brand.darkBlue"}
      height={"100vh"}
      fontFamily={"Outfit"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingBlockStart={"4.9rem"}
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
      <VStack
        backgroundColor={"brand.semiDarkBlue"}
        width={"100%"}
        padding={{base: 6, md: 8}}
        borderRadius={{base: '0.625rem', md: "1.25rem"}}
        spacing={10}
        maxWidth={{base: '20.4375rem', md: "25rem"}}
        marginBlockStart={"5.1869rem"}
      >
        <Text
          color={"brand.white"}
          fontSize={"2rem"}
          letterSpacing={"-.5px"}
          alignSelf={"flex-start"}
        >
          Login
        </Text>
        <form action="" style={{ width: "100%" }} onSubmit={handleLogin}>
          <VStack
            gap={6}
            color={"brand.white"}
            css={css`
              caret-color: #fc4747;
            `}
          >
            <FormControl
              isInvalid={!!emailError}
              // position={"relative"}
            >
              <Input
                value={email}
                onChange={handleEmailChange}
                name="Email Address"
                placeholder="Email address"
                type="email-address"
                variant={"flushed"}
                _placeholder={{ color: "white", opacity: "0.5" }}
                paddingBlockEnd={"1.125rem"}
                paddingInlineStart={4}
                borderBottomColor={"brand.greyishBlue"}
                fontSize={"0.9375rem"}
                focusBorderColor="brand.white"
                width={"100%"}
                sx={{
                  "&:-webkit-autofill": {
                    boxShadow: "0 0 0px 1000px transparent inset !important",
                    WebkitTextFillColor: "inherit !important",
                    fontSize: "inherit !important",
                    transition:
                      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
                  },
                }}
              />
              <FormErrorMessage color={"brand.red"} fontSize={"0.8125rem"}>
                {emailError}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!passwordError}>
              <InputGroup>
                <Input
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  variant={"flushed"}
                  _placeholder={{ color: "white", opacity: "0.5" }}
                  paddingInlineStart={4}
                  paddingBlockEnd={"1.125rem"}
                  borderBottomColor={"brand.greyishBlue"}
                  fontSize={"0.9375rem"}
                  focusBorderColor="brand.white"
                  sx={{
                    "&:-webkit-autofill": {
                      boxShadow: "0 0 0px 1000px transparent inset !important",
                      WebkitTextFillColor: "inherit !important",
                      fontSize: "inherit !important",
                      transition:
                        "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
                    },
                  }}
                />
                <InputRightElement width={""} marginBlockEnd={4}>
                  <Button
                    onClick={handleShowPassword}
                    size={"sm"}
                    backgroundColor={"brand.red"}
                    color={"brand.white"}
                    fontSize={"0.9375rem"}
                    fontWeight={"normal"}
                    _hover={{
                      backgroundColor: "brand.white",
                      color: "brand.semiDarkBlue",
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage color={"brand.red"} fontSize={"0.8125rem"}>
                {passwordError}
              </FormErrorMessage>
              {/* <FormErrorMessage
                color={"brand.red"}
                position={"absolute"}
                top={"-10%"}
                right={0}
                fontSize={"0.75rem"}
              >
                {passwordError}
              </FormErrorMessage> */}
            </FormControl>
          </VStack>
          <Button
            type="submit"
            marginBlockStart={10}
            backgroundColor={"brand.red"}
            color={"brand.white"}
            fontSize={"0.9375rem"}
            width={"100%"}
            fontWeight={"normal"}
            paddingBlockStart={"0.875rem"}
            paddingBlockEnd={"0.9375rem"}
            _hover={{
              backgroundColor: "brand.white",
              color: "brand.semiDarkBlue",
            }}
          >
            Login to your account
          </Button>
        </form>
        <Text color={"brand.white"} textAlign={"center"}>
          Don’t have an account?&nbsp;
          <Link to={"/signup"}>
            <Text color={"brand.red"} display={"inline"}>
              Sign Up
            </Text>
          </Link>
        </Text>
      </VStack>
    </Box>
  );
}

export default LoginPage;
