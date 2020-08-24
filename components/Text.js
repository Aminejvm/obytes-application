import { Box } from "@xstyled/styled-components";

const Heading = ({ dark = false, children, ...props }) => (
  <Box
    forwardedAs="h1"
    fontSize={{ xs: "1.6rem", md: "2rem" }}
    lineHeight={1.28}
    fontWeight={700}
    color={dark ? "#102A43" : "#FFF4E5"}
    m={0}
    p={0}
    {...props}
  >
    {children}
  </Box>
);
const P = ({ dark = false, children, ...props }) => (
  <Box
    forwardedAs="p"
    fontSize={{
      xs: "1rem",
      md: "1.375rem",
    }}
    lineHeight={1.4}
    color={dark ? "#627D98" : "#FFF4E5"}
    m={0}
    p={0}
    {...props}
  >
    {children}
  </Box>
);

const Small = ({ dark = false, children, ...props }) => (
  <Box
    forwardedAs="span"
    fontSize="1rem"
    lineHeight={1.4}
    fontWeight={600}
    color={dark ? "#627D98" : "#FFF4E5"}
    m={0}
    p={0}
    {...props}
  >
    {children}
  </Box>
);

const Strong = ({ children, ...props }) => (
  <Box
    forwardedAs="strong"
    fontSize={{ xs: "1.1rem", md: "1.4rem" }}
    lineHeight="1.4"
    color="white"
    m={0}
    p={0}
    {...props}
  >
    {children}
  </Box>
);

export default { P, Heading, Small, Strong };
