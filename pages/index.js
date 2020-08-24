import styled, { Box } from "@xstyled/styled-components";
import { motion, transform } from "framer-motion";
import Head from "next/head";
import * as React from "react";
import { Stack, Text } from "../components";

const AnimatedSection = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70ch;
  text-align: center;
  transition: opacity 0.6s ease 0s;
`;

const DarkSection = styled.section`
  background-color: #ff8b01;
  height: 100vh;
  width: 100%;
  min-height: 600px;
`;

const WhiteSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
  min-height: 600px;
`;

const BackgroundSection = styled.section`
  z-index: -1;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  height: 200vh;
  &::after {
    content: "";
    position: absolute;
    background-color: #ff8b01;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    opacity: ${({ opacity }) => opacity};
  }
`;

const BlurBackground = styled.section`
  background: url("careers-background.jpg") center center / cover no-repeat
    fixed;
  filter: blur(90px);
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100%;
`;

const Email = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
`;

function ObytesIcon(props) {
  return (
    <svg width={97} height={43} fill="none" {...props}>
      <path
        d="M92.756 25.064c-1.958-.653-3.999-.98-3.999-2.612 0-1.55 1.061-2.285 3.265-2.285 1.142 0 2.203.163 3.264.49a3.264 3.264 0 00.816-2.285 8.976 8.976 0 00-4.407-.816c-4.08 0-5.957 1.958-5.957 4.978 0 3.02 2.367 4.08 4.488 4.815 1.877.49 3.591.898 3.591 2.693 0 1.714-1.06 2.285-3.02 2.285a13.71 13.71 0 01-4.325-.816 3.345 3.345 0 00-.816 2.448c1.649.808 3.47 1.2 5.305 1.143 4.08 0 6.039-1.959 6.039-5.142 0-3.264-2.204-4.162-4.244-4.896zm-60.88-7.508a5.06 5.06 0 00-4.57 2.04v-8.814a4.489 4.489 0 00-1.633-.163 4.242 4.242 0 00-1.632.245V34.53c.523.188 1.077.271 1.632.245a4.488 4.488 0 001.632-.244V32.98a5.06 5.06 0 004.57 2.122c3.673 0 5.958-2.367 5.958-8.896 0-6.529-2.285-8.814-5.958-8.814v.164zm-1.062 14.771c-2.285 0-3.509-1.877-3.509-4.08v-4.081c0-2.203 1.224-4.08 3.51-4.08 2.448 0 3.753 1.305 3.753 6.12s-1.224 6.121-3.753 6.121zm45.62-14.853c-4.243 0-7.018 2.53-7.018 8.65 0 5.795 2.285 8.896 7.182 8.896 1.84.07 3.66-.414 5.223-1.387a3.346 3.346 0 00-1.061-2.285 7.672 7.672 0 01-3.754.897c-2.612 0-4.08-1.224-4.407-5.06h9.793c.163-1.06.326-2.121.326-3.264 0-4.244-2.448-6.529-6.284-6.529v.082zm3.02 7.508H72.68c.245-3.59 1.632-4.896 3.673-4.896 2.448 0 3.183 1.632 3.183 3.427 0 .49 0 .98-.164 1.47h.082zm-13.955 7.345c-2.285 0-3.183-.816-3.183-3.672v-8.406h4.08c.151-.391.234-.805.245-1.224a3.102 3.102 0 00-.163-1.224h-4.08v-3.51a5.305 5.305 0 00-3.265.653v2.938h-2.448c-.16.389-.243.804-.245 1.224 0 .408.082.816.245 1.143h2.448v8.65c0 4.08 1.632 6.284 5.468 6.284a9.554 9.554 0 002.285-.326c.163-.326.163-.816.163-1.143a4.08 4.08 0 00-.245-1.224l-1.305.082v-.245zM52.033 18.045l-3.183 9.793-.98 3.836h-.244a32.4 32.4 0 00-1.142-3.835l-3.591-9.794a4.895 4.895 0 00-1.633-.163c-.549-.033-1.1.022-1.632.163l5.958 16.486c.326.163.734.244 1.06.244l-.652 1.959c-.98 3.02-1.632 3.427-3.101 3.427a9.13 9.13 0 01-1.47-.163c-.182.41-.266.858-.244 1.306 0 .408 0 .816.245 1.224a4.65 4.65 0 001.714.327c3.427 0 4.57-2.04 5.712-5.55l6.121-19.26a4.409 4.409 0 00-1.469-.245 4.162 4.162 0 00-1.632.245M11.147 35.102a11.344 11.344 0 01-3.591-22.035.736.736 0 01.571 0 .734.734 0 01.326.408.816.816 0 01-.49.98 9.793 9.793 0 003.265 19.096 9.793 9.793 0 003.183-19.178c-.49 0-9.304-3.346-9.304-8.243 0-.245.164-.408.327-.571.081-.082 2.53-2.04 7.345 1.795C13.595 5.07 15.96.01 20.45.581a.734.734 0 01.571.653 10.609 10.609 0 01-4.57 9.793.817.817 0 01-1.06-.163.816.816 0 01.162-.98c2.53-1.795 4.081-4.733 4.081-7.834-3.917 0-5.713 6.692-5.794 6.692a.817.817 0 01-.49.571.816.816 0 01-.734-.163C9.35 6.212 7.393 6.375 6.658 6.538c.49 3.02 5.958 5.713 8.161 6.53a11.344 11.344 0 01-3.672 22.034"
        fill="#FD7D4B"
      />
      <path
        d="M20.124 23.758a8.977 8.977 0 01-8.977 9.14c-4.897 0-8.978-4.08-8.978-9.058a8.978 8.978 0 018.978-9.14c4.896 0 8.977 4.08 8.977 9.14"
        fill="#FD7D4B"
      />
      <path
        d="M19.797 23.758c0 4.897-3.917 8.732-8.65 8.732-4.734 0-8.57-3.835-8.57-8.65s3.836-8.733 8.57-8.733a8.568 8.568 0 016.12 2.53 8.732 8.732 0 012.449 6.203"
        fill="#fff"
      />
      <path
        d="M11.065 23.105h.326l2.449-6.529a.408.408 0 000-.49 8.078 8.078 0 00-5.305 0s-.326.164-.163.49l2.448 6.53a.164.164 0 00.163 0h.082zm.571.082l.163.244h.164l6.365-2.774a.408.408 0 00.163-.49 8.16 8.16 0 00-3.672-3.754s-.408-.082-.49.245l-2.774 6.447v.082h.081zm.327.571v.326l6.447 2.53c.163.082.326 0 .408-.081a8.325 8.325 0 000-5.305s-.163-.408-.49-.245l-6.447 2.448a.163.163 0 000 .164l.082.163zm-.082.571l-.326.245 2.856 6.529a.408.408 0 00.408.245 8.242 8.242 0 003.672-3.836s.164-.408-.163-.49l-6.365-2.774a.164.164 0 00-.164 0l.082.081zm-.653.245h-.326l-2.449 6.61s-.163.245.082.409a7.998 7.998 0 005.223 0s.327-.164.245-.49l-2.448-6.529a.163.163 0 00-.164 0h-.163zm-.571-.082l-.163-.244h-.082l-6.365 2.856a.408.408 0 00-.245.408 8.161 8.161 0 003.672 3.754s.408.163.571-.163l2.775-6.447a.164.164 0 000-.163h-.163zm-.245-.49v-.326h-.082l-6.528-2.611a.409.409 0 00-.408.163 8.324 8.324 0 000 5.305s.244.326.49.163l6.528-2.448a.163.163 0 000-.164v-.081zm.082-.57l.245-.245-2.775-6.53a.408.408 0 00-.408-.244 8.161 8.161 0 00-3.754 3.754s-.082.408.163.49l6.447 2.774a.163.163 0 00.082 0zm-2.612-8.977l-.734-1.306a24.476 24.476 0 013.999-1.143l3.835 2.775a9.548 9.548 0 00-7.1-.163"
        fill="#FD7D4B"
      />
    </svg>
  );
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
    return window.removeEventListener("scroll", () =>
      setScrollPosition(window.scrollY)
    );
  });
  return scrollPosition;
};

export default function Home() {
  const _sectionHeight = React.useRef(100);
  const headingRef = React.useRef();

  React.useEffect(() => {
    if (headingRef) {
      _sectionHeight.current = headingRef.current?.offsetHeight || 600;
    }
  }, [headingRef]);

  const scrollPosition = useScrollPosition();

  const heroSectionRange = [0, _sectionHeight.current];
  const headingOpacityRange = transform(scrollPosition, heroSectionRange, [
    1,
    0,
  ]);
  const headingTransformRange = transform(scrollPosition, heroSectionRange, [
    0,
    -100,
  ]);

  const educationSectionRange = [
    (_sectionHeight.current * 3) / 2,
    _sectionHeight.current * 2,
  ];
  const educationOpacityRange = transform(
    scrollPosition,
    educationSectionRange,
    [1, 0]
  );
  const educationTransformRange = transform(
    scrollPosition,
    [_sectionHeight.current, educationSectionRange[1]],
    [50, -50]
  );

  const experienceSectionRange = [
    (_sectionHeight.current * 5) / 2,
    _sectionHeight.current * 3,
  ];
  const experienceOpacityRange = transform(
    scrollPosition,
    experienceSectionRange,
    [1, 0]
  );
  const experienceTransformRange = transform(
    scrollPosition,
    [_sectionHeight.current * 2, experienceSectionRange[1]],
    [50, -50]
  );

  const imageSectionRange = [
    _sectionHeight.current * 3,
    _sectionHeight.current * 4,
  ];
  const imageOpacity = transform(scrollPosition, imageSectionRange, [1, 0]);
  const blurOpacity = transform(scrollPosition, imageSectionRange, [0, 50]);

  const emailOpacity = transform(experienceTransformRange, [50, -50], [1, 0]);

  return (
    <div>
      <Head>
        <title>Job Application for Obytes</title>
      </Head>
      <Email style={{ opacity: emailOpacity }}>
        <Text.Small>elouartinra@gmail.com</Text.Small>
      </Email>
      <DarkSection ref={headingRef}>
        <AnimatedSection
          style={{ opacity: scrollPosition < _sectionHeight.current ? 1 : 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: headingOpacityRange, y: headingTransformRange }}
            transition={{ duration: 0 }}
          >
            <Stack space={0.8}>
              <Text.Heading>Hi Obytes, I'm Amine</Text.Heading>
              <Text.P>
                Currently Living in Tangier, I'm passionate about details, my
                goal is to create solid and scalable products.
              </Text.P>
            </Stack>
          </motion.div>
        </AnimatedSection>
      </DarkSection>
      <DarkSection>
        <AnimatedSection
          style={{
            opacity:
              scrollPosition > _sectionHeight.current &&
              scrollPosition < _sectionHeight.current * 2
                ? 1
                : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: educationOpacityRange,
              y: educationTransformRange,
            }}
            transition={{ duration: 0 }}
          >
            <Text.P>
              <Text.Strong>About my education</Text.Strong>: I've graduated in
              late 2019 with a bachelor degree in computer science, and a
              professional degree in networking and telecommunications.
            </Text.P>
          </motion.div>
        </AnimatedSection>
      </DarkSection>
      <DarkSection>
        <AnimatedSection
          style={{
            opacity: scrollPosition > _sectionHeight.current * 2 ? 1 : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: experienceOpacityRange,
              y: experienceTransformRange,
            }}
            transition={{ duration: 0 }}
          >
            <Text.P>
              <Text.Strong>Part of Obytes</Text.Strong>: I'm committed to taking
              my job responsibly, and my goal to succeed as a team member, and
              grow alongside it.
            </Text.P>
          </motion.div>
        </AnimatedSection>
      </DarkSection>
      <BackgroundSection opacity={imageOpacity}></BackgroundSection>
      <WhiteSection>
        <Box
          display="flex"
          width={{ xs: "80%", md: "fit-content" }}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          m="auto"
        >
          <BigTitle fontSize={{ xs: "3rem", md: "7rem" }}>
            More About Myself
          </BigTitle>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            minHeight={300}
            mt="1rem"
            p="3rem 0"
          >
            {informations.map((item) => (
              <Stack key={item.title}>
                <A href={item.href}>
                  <Text.Heading dark>{item.title}</Text.Heading>
                </A>
                <Text.Small dark>{item.description}</Text.Small>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box display="flex" mt="auto" p="16px">
          <ObytesIcon style={{ margin: "0 auto" }} />
        </Box>
      </WhiteSection>
    </div>
  );
}

const informations = [
  {
    title: "Gfree",
    description: "Co-founder of a gluten free community.",
    href: "http://gfree.co/",
  },
  {
    title: "Portfolio",
    description: "Sharing my knowledge on my blog.",
    href: "https://aminejv.me/",
  },
  {
    title: "Resume",
    description: "Academic curriculum and professional experiences.",
    href: "https://aminejv.me/resume.pdf",
  },
];

const A = styled.a`
  text-decoration: none;
  position: relative;
  z-index: 9999;
  &:hover h1 {
    cursor: pointer;
    color: #fd7d4b;
  }
`;

const BigTitle = styled.h1Box`
  font-size: 7rem;
  color: #102a43;
  line-height: 1.1;
  max-width: 7ch;
  margin: 0;
  padding: 0;
`;
