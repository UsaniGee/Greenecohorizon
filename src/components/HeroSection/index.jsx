import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakra, Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1748875386/351_tpdwiz.jpg",
    title: "Welcome to ",
    title_1: "Green Eco Horizon",
    subtitle:
      "We're a nonprofit building a sustainable environment in Nigeria through technology, innovation, and environmental resilience. Join us in shaping a cleaner, healthier world.",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1748875529/2148576715_lzakkt.jpg",
    title: "Welcome to ",
    title_1: "Green Eco Horizon",
    subtitle:
      "We're a nonprofit building a sustainable environment in Nigeria through technology, innovation, and environmental resilience. Join us in shaping a cleaner, healthier world.",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1748875722/2150196702_hz5u0i.jpg",
    title: "Welcome to ",
    title_1: "Green Eco Horizon",
    subtitle:
      "We're a nonprofit building a sustainable environment in Nigeria through technology, innovation, and environmental resilience. Join us in shaping a cleaner, healthier world.",
  },
];

const HeroSection = () => {
  const MotionBox = chakra(motion.div);
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box w="100%" h={{ base: "85vh", md: "100vh" }} position="relative">
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              backgroundImage={`url(${slide.image})`}
               loading="lazy"
              backgroundSize="cover"
              backgroundPosition="center"
              w="100%"
              h="100%"
              position="relative"
            >
              {/* Overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.3))"
                zIndex={1}
              />

              {/* Content */}
              <Container
                maxW="7xl"
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                px={{ base: 6, md: 10 }}
              >
                <VStack align="start" spacing={6} color="white">
                  <MotionBox
                    variants={fadeVariants}
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                  >
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
                      <Text as="span">
                        <Typewriter
                          options={{ strings: [slide.title], autoStart: true, loop: false }}
                        />
                      </Text>{" "}
                      <Text
                        as="span"
                        borderBottom="4px solid rgba(72, 187, 120, 1)"
                        _hover={{ borderColor: "green.400" }}
                      >
                        {slide.title_1}
                      </Text>
                    </Heading>
                  </MotionBox>

                  <MotionBox
                    variants={fadeVariants}
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    maxW={{ base: "100%", md: "650px" }}
                  >
                    <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                      {slide.subtitle}
                    </Text>
                  </MotionBox>
                </VStack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
