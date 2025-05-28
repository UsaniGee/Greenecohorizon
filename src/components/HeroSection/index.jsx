import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakra, Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';


const slides = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1743718714/15256_wkmoxw.jpg",
    loading: "lazy",
    title: "Welcome to ",
    title_1: "Green Eco Horizon ",
    subtitle: "We are a nonprofit organization dedicated to building a sustainable environment in Nigeria. We work at the intersection of technology, innovation, and environmental resilience, addressing the unique climate challenges faced by vulnerable, frontline, and marginalized communities. Join us in creating a cleaner, healthier, and more sustainable world.",
    // buttonText: "Explore", 
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1747616505/leaf-eco-word_srjvqt.jpg",
     loading: "lazy",
    title: "Welcome to ",
    title_1: "Green Eco Horizon ",
    subtitle: "We are a nonprofit organization dedicated to building a sustainable environment in Nigeria. We work at the intersection of technology, innovation, and environmental resilience, addressing the unique climate challenges faced by vulnerable, frontline, and marginalized communities. Join us in creating a cleaner, healthier, and more sustainable world.",
    // buttonText: "Explore", 
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1747616520/digital-screen-with-environment-day_p8gtzs.jpg",
    loading: "lazy",
    title: "Welcome to ",
    title_1: "Green Eco Horizon ",
    subtitle: "We are a nonprofit organization dedicated to building a sustainable environment in Nigeria. We work at the intersection of technology, innovation, and environmental resilience, addressing the unique climate challenges faced by vulnerable, frontline, and marginalized communities. Join us in creating a cleaner, healthier, and more sustainable world.",
    // buttonText: "Learn More",
  },
];

const HeroSection = () => {
  const MotionBox = chakra(motion.div);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box position="relative" w="100%" h={{ base: "90vh", md: "100vh" }}>
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade" 
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(fade) => setActiveIndex(fade.realIndex)}
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
              <Box
                position="absolute"
                top={0}
                right={0}
                h="100%"
                w="100%"
                zIndex={1}
                pointerEvents="none"
                bg="radial-gradient(circle at right center, rgba(34, 197, 94, 0.35) 0%, rgba(255, 197, 94, 0.7) 30%, transparent 70%)"
/>

               <MotionBox mb={5}
                display="flex"
                flexDir="column"
                width={{base:"18.75em", lg: "fit-content"}}
                position="absolute"
                height={{base: "fit-content", md: "fit-content"}}
                top={{ base: "19%", md: "35%" }}
                left={{ base: "5%", md: "10%" }}
                 right={{ base: "5%", md: "" }}
                zIndex={2}
                textAlign={"justify"}
                >
                  <Heading fontSize={{ base: "2em", md: "3em" }} color="white" textShadow="2px 2px #000000" w={{lg: "auto"}} fontWeight={600} display={{base: "block", lg: "flex"}} gap={2} alignItems={"center"} p={3}>
                   <Text>
                   <Typewriter 
                   options={{
                    strings: [slide.title],
                    autoStart: true,
                    loop: false,
                   }}
                   />
                  </Text>
                   <Text  
                   letterSpacing={"10px"}
                   fontWeight={200}
                   fontSize={"1.2em"}
                   borderBottom="solid rgba(155, 255, 155, 1)" 
                   width={"fit-content"}
                   _hover={{ borderColor: "green" }}                 
                  >
                   {slide.title_1}
                  </Text>


                  </Heading>
                </MotionBox>


              <MotionBox
                key={activeIndex === index ? `slide-${index}` : undefined}
                display="flex"
                flexDir="column"
                width={"fit-content"}
                position="absolute"
                height={{base: "fit-content", md: "fit-content"}}
                top={{ base: "75%", md: "75%" }}
                left={{ base: "5%", md: "10%" }}
                right={{ base: "5%", md: "" }}
                transform="translateY(-50%)"
                bg="rgba(14, 12, 12, 0.17)"
                p={{md: 10, base: 4}}
                borderRadius="md"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                zIndex={2}
                textAlign={"justify"}
              >
               
                <MotionBox >
                  <Text fontSize={{ base: "1em", md: "1em" }} mt={2} color="white" w={{lg: "600px", base: "auto"}} textShadow="1px 1px #000000">
                    {slide.subtitle}
                  </Text>
                </MotionBox>

              </MotionBox>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
