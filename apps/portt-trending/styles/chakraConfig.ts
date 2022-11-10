import { extendTheme } from "@chakra-ui/react";
import { PorttTheme } from "portt-ui";

// Init our app theme -- this is the theme that we use for this specific app
const appTheme = extendTheme({
    // Notice the base theme here that we import from our ui lib
    ...PorttTheme
  });

export default appTheme;