import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        red : '#FC4747',
        darkBlue: '#10141E',
        greyishBlue: '#5A698F',
        semiDarkBlue: '#161D2F',
        white: '#FFFFFF',
    }
}

const theme = extendTheme({ colors });

export {theme}