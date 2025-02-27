import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import BackgroundVideo from "next-video/background-video";
import localFont from "@next/font/local";
import styles from "../styles/page.module.css";
import backgroundVideo from "../../videos/background.mp4";
import "flag-icons";

const heading = localFont({ src: "../../public/fonts/SpaceGrotesk.ttf" });
const bodyRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.otf",
});
const bodyMedium = localFont({ src: "../../public/fonts/Satoshi-Medium.otf" });
const bodyBold = localFont({ src: "../../public/fonts/Satoshi-Bold.otf" });

export default function Home() {
  return (
    <BackgroundVideo
      src={backgroundVideo}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      className={styles.video}
    >
      <Box
        className={heading.className}
        background="transparent"
        minH="100vh"
        minW="100vw"
        overflow="auto"
        position="relative"
      >
        <Flex
          position="relative"
          zIndex={2}
          justifyItems="center"
          alignItems={"center"}
          justify="center"
          direction="column"
        >
          <Box position={"absolute"} top={0} zIndex={1}>
            <Image
              src="/assets/glow.svg"
              height="250"
              width="250"
              alt="ETHAntwerp"
            />
          </Box>
          <Flex
            zIndex={2}
            mt="16"
            direction={"column"}
            justify="center"
            alignItems="center"
          >
            <Image
              src="/assets/logo.svg"
              height={{ base: "20", md: "100" }}
              width={{ base: "20", md: "100" }}
              alt="ETHBelgium"
            />
            <Text color="white" mt="2">
              ETHBelgium
            </Text>
            <Image
              mt="6"
              src="/assets/star.svg"
              height="6"
              width="6"
              alt="ETHBelgium"
            />
            <Text
              color="white"
              mt="6"
              fontSize={{ base: "3xl", md: "3xl", xl: "4xl" }}
              px={{ base: "20", md: 0 }}
              align="center"
            >
              Belgium{`'`}s own ETH movement is here!
            </Text>

            <Text
              className={bodyRegular.className}
              color="white"
              mt="2"
              opacity={0.6}
              fontSize={{ base: "sm", md: "sm", xl: "md" }}
              px={{ base: "12", md: 0 }}
              align="center"
            >
              Join Belgium{"’"}s Ethereum epicentre{" "}
              <span className="fi fi-be"></span>. No clichés, just real
              connections.
            </Text>
            <Button
              rounded="full"
              _hover={{ transform: "scale(1.06)" }}
              _focus={{}}
              _active={{ transform: "scale(0.9)" }}
              color="white"
              backdropFilter={"blur(3px)"}
              boxShadow={"0px 0px 30px 2px rgb(255,255,255,0.5)"}
              mt="10"
              className={bodyBold.className}
              bgColor="transparent"
              pr="2"
              pl="6"
              pb="7"
              pt="7"
              role="group"
              onClick={() => {
                open("https://emerald-titanium-81d.notion.site/ETHBelgium-The-Manifesto-1a09a3563a5080f6bbc9f20982f6b3e3");
              }}
              fontSize="medium"
              bgGradient="linear(to-r, #FFE8DBB3 0%, #E7CEFFB3 100%)"
              rightIcon={
                <Image
                  _groupHover={{ transform: "rotate(45deg)" }}
                  transitionDuration={"200ms"}
                  src="/assets/link.svg"
                  height="10"
                  width="10"
                  alt="ETHAntwerp"
                />
              }
            >
              Read our Manifesto
            </Button>
            <Flex gap="5" mt="3">
              <Link
                href="https://tally.so/r/mOoq88"
                target="_blank"
                _hover={{ opacity: 1 }}
                opacity={0.7}
                color="white"
                className={bodyMedium.className}
                textDecoration="underline"
              >
                Companies
              </Link>
              <Text
                opacity={0.7}
                color="white"
                className={bodyRegular.className}
              >
                |
              </Text>
              <Link
                href="https://tally.so/r/mJWjWY"
                target="_blank"
                _hover={{ opacity: 1 }}
                opacity={0.7}
                color="white"
                className={bodyMedium.className}
                textDecoration="underline"
              >
                Contribute
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="5"
          mt="24"
          position="absolute"
          bottom={10}
          justifyItems="center"
          justify="center"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            color="white"
            className={bodyMedium.className}
            href="https://x.com/ETHBelgiumHQ"
            target="_blank"
            _hover={{ transform: "translateY(-3px)" }}
          >
            <Image
              src="/assets/twitter.svg"
              height="10"
              width="10"
              alt="ETHAntwerp | Twitter"
            />
          </Link>

          <Link
            color="white"
            className={bodyMedium.className}
            href="https://t.me/Ethbelgium"
            target="_blank"
            _hover={{ transform: "translateY(-3px)" }}
          >
            <Image
              src="/assets/telegram.svg"
              height="10"
              width="10"
              alt="ETHBelgium | Telegram"
            />
          </Link>
          <Link
            color="white"
            className={bodyMedium.className}
            href="https://www.linkedin.com/company/ethbelgium/"
            target="_blank"
            _hover={{ transform: "translateY(-3px)" }}
          >
            <Image
              src="/assets/linkedin.svg"
              height="10"
              width="10"
              alt="ETHBelgium | LinkedIn"
            />
          </Link>
        </Flex>
      </Box>
    </BackgroundVideo>
  );
}
