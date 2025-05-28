import { Box, Flex, Grid, Heading, Image, Link, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../../components/HeroSection'
import ButtonStyled from '../../components/Button'
import { MdVolunteerActivism } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const Home = () => {

  const cardBg = useColorModeValue('white', 'gray.800');
 const whatWeDo = [
    { title: 'Renewable Energy Technologies ', subtitle: 'We advocate for the government to harness the power of the sun, wind, water, and bioenergy to reduce carbon emissions. We believe by focusing on policy reform, we can create jobs, and power communities with clean, sustainable energy.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743745034/1324_alnwkl.jpg' },
    { title: 'Ocean conservation', subtitle: 'We are passionate about ocean conservation because it plays a critical role in building sustainable carbon credits. Healthy marine ecosystems help combat climate change while providing countless benefits', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743745674/2149094890_k5ajmo.jpg' },
    { title: 'Land restoration', subtitle: 'At Green Eco Horizon, we believe that restoring the land is one of the most impactful ways to fight climate change. Healthy ecosystems naturally absorb and store carbon, helping us build robust carbon credits that support climate action.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746171/2148346117_edddoe.jpg' },
    { title: 'Water and Waste Management ', subtitle: 'We champion clean water solutions, waste-to-energy systems, and circular economy models that reduce pollution and conserve vital natural resources.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746639/2149571880_y6ofz4.jpg' },
  
  ];



  return (
    <Box>
      {/* Header */}
      <HeroSection />
  
     {/* About Us */}
     <Box paddingY={20} textColor={"#123524"}  display={"grid"}
      backgroundImage={"url(https://res.cloudinary.com/dnu4lxiie/image/upload/v1747907717/ecology-seamless-pattern-green-linear-icons-environmental-improvement-sustainability-recycle_372860-992_qwvhli.avif)"}
      spacing={8} 
      >
      <Grid maxW="7xl" mx="auto" justifyContent={"center"} gridTemplateColumns={{lg: "1fr 1fr"}} textAlign={"center"} paddingX={{base: 2, lg: 10}} gap={20} py={10}>
     <Grid border={"solid 10px rgba(39, 103, 73, 0.3)"} borderRadius={{lg:"10px 10px", base: "10px 10px"}} justifyItems={"center"} alignContent={"center"} height={"100%"} transform={"rotate(10deg)"}>
      <Image
      borderRadius={{lg:"10px 10px", base: "10px 10px"}}
      height={{base: "100%", lg: "60vh"}}
      objectFit="cover"
      loading="lazy"
      src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1747623085/african-american-teenager-advocating-ecology-by-holding-small-plant_zsuv4g.jpg"
       alt="About-Us"
       transform={"rotate(-20deg)"}
       border={"solid 10px rgba(39, 103, 73, 0.3)"}
      />
     </Grid>
     <Grid boxSizing='border-box' alignContent={"center"} gap={5} backgroundColor={"rgba(228, 224, 224, 0.5)"} p={{base: 5, lg: 10}}>
       <Text fontSize={"4xl"} fontWeight={600}>
        About Us
      </Text>
      <Text fontSize={"1em"} textAlign={"justify"} >
     Green Eco Horizon is a nonprofit organization committed to environmental sustainability and climate resilience in Nigeria. Just like a doctor treats a patient according to their specific illness, we address the unique environmental needs of different communities. Our mission is to empower these communities to adapt to and mitigate the impacts of climate change through innovative, technology-driven solutions. We focus on land restoration, ocean conservation with focus on cutting-edge green technologies like carbon capture, renewable energy, sustainable agriculture, artificial intelligence (AI), data-driven analytics, and carbon credits  to tackle pressing environmental challenges like pollution, deforestation, and carbon emissions.
      </Text>
    <Link href='/about-us' margin={"auto"}  mt={4}>
     <ButtonStyled title="Learn More" />
   </Link>
     </Grid>
      </Grid>
     </Box>


      {/*Our Mission*/}
      <Grid gridTemplateColumns={{lg: "1fr 1fr 1fr 1fr"}} h={{md: "70vh"}} paddingX={{base: 5, md: 24}} paddingY={{base: 14, md: 24}} textColor={"#ffffff"} 
      backgroundColor="rgba(39, 103, 73, 0.8)"
      gap={10} 
      >
        <Flex display={{base: "none", lg: "block"}} position={"relative"} >
          <Image position={"absolute"} top={"20px"} right={"-100px"} h={"100%"} objectFit={"cover"} borderRadius={"20px"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1747980684/sustainable-development-goals-still-life_rvucnh.jpg' alt='Our Mission'  loading="lazy" />
        </Flex>
          <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} padding={{base: 5, md: 0}} gap={5} borderRadius={"20px"} backgroundColor={"rgba(71, 97, 58, 0.5)"} marginX={{base: "50px", md: "0"}} zIndex={10} boxShadow={"5px 5px 10px rgba(000, 000, 000, 0.2)"} _hover={{
           transform: "scale(1.1)",
           transition: "0.5s"
        }}>
      <Text fontSize={"4xl"} fontWeight={600}>
        Our Mission
      </Text>
      <Text fontSize={"14px"} paddingX={{base: "0px", md: "30px"}} textShadow={"2px 2px 5px black"}>
         To promote resilience and environmental sustainability,  by developing innovative, technology-driven solutions and targeted community support.    
      </Text>
      </Flex>
      <Flex display={{base: "none", lg: "block"}} position={"relative"}>
        <Image position={"absolute"} top={"20px"} h={"100%"} objectFit={"cover"} borderRadius={"20px"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1747981967/sustainable-development-goals-still-life_1_wr9vlp.jpg' alt='Our Mission'  loading="lazy"/>
      </Flex>
        <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} padding={{base: 5, md: 0}} gap={5} borderRadius={"20px"} backgroundColor={"rgba(71, 97, 58, 0.5)"} marginX={{base: "50px", md: "0"}} zIndex={10} boxShadow={"5px 5px 10px rgba(000, 000, 000, 0.2)"} position={"relative"} right={{lg: "100px"}} _hover={{
           transform: "scale(1.1)",
           transition: "0.5s"
        }}>
      <Text fontSize={"4xl"} fontWeight={600}>
        Our Vision
      </Text>
      <Text fontSize={"14px"} paddingX={{base: "10px"}} textShadow={"2px 2px 5px black"}>
          To build 50,000 times more climate resilient Nigerian communities by 2040.     
      </Text>
      </Flex> 
    
     </Grid>


      {/*Our Innovation*/}
      <Box paddingY={20} paddingX={10}  w={"100%"}  
      // backgroundImage={"url(https://res.cloudinary.com/dnu4lxiie/image/upload/v1748019616/Natures_bulb_mexnri.jpg)"}
      textColor={"#123524"}
      >
     

       {/* What We Do */}
           <Box py={16} px={6} >
             <VStack spacing={8} maxW="7xl" mx="auto">
              <Text textAlign={"left"} fontSize={"2em"} w={'100%'}>
              What We Do
            </Text>
               <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                
                 {whatWeDo.map((item, index) => (
                   <Box
                     key={index}
                     bg={cardBg}
                     boxShadow="md"
                     borderRadius="xl"
                     overflow="hidden"
                     transition="all 0.3s"
                     _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
                   >
                     <Image src={item.img} alt={item.title}  loading="lazy" height="160px" width="100%" objectFit="cover" />
                     <Box p={4}>
                       <Heading size="md">{item.title}</Heading>
                       <Text fontSize="sm" mt={2}>{item.subtitle}</Text>
                     </Box>
                   </Box>
                 ))}
               </SimpleGrid>
             </VStack>
           </Box>
      </Box>


      {/* Volunteer */}
      <Grid gridTemplateColumns={{md:"1fr 1fr"}} paddingY={20} paddingX={10} textColor={"white"} fontFamily={"fantasy"} h={{lg: "90vh"}} backgroundColor={"green.800"} backgroundImage={"url(https://res.cloudinary.com/dnu4lxiie/image/upload/v1748099217/bg-letstalk_g9aabc.png)"} gap={10}>
       <Grid gap={10}>
        <Text fontSize={{base: "5em", lg: "7em"}} fontWeight={"thin"} lineHeight={"1"}>Get Involved.</Text>
       <Box>
        <Flex fontSize={"2em"} backgroundColor={"rgba(000, 000, 000, 0.5)"} padding={"10px"} width={"50px"} justifyContent={"center"} borderRadius={"100%"}>
          <MdVolunteerActivism />
        </Flex>
        <Grid gridTemplateColumns={{lg: " auto auto"}} alignItems={"center"} gap={5}>
        <Text>
          Opportunity for youth, professionals, and community members to contribute 
        </Text>
        <ButtonStyled title="Volunteer" />
       </Grid>

       </Box>
      
       </Grid>

       
       <Grid gap={10}>
 <Box>
  <Flex fontSize={"2em"} backgroundColor={"rgba(000, 000, 000, 0.5)"} padding={"10px"} width={"50px"} justifyContent={"center"} borderRadius={"100%"}>
         <FaDonate />
        </Flex>
    <Grid gridTemplateColumns={{lg:"auto auto"}} alignItems={"end"} gap={5}> 
        <Text h={"100%"} verticalAlign={"text-bottom"} display={"flex"} alignItems={"center"}>
          Want to Donate? 
        </Text>
        <ButtonStyled title="Donate" />
       </Grid>
 </Box>

        <Box>
            <Flex fontSize={"2em"} backgroundColor={"rgba(000, 000, 000, 0.5)"} padding={"10px"} width={"50px"} justifyContent={"center"} borderRadius={"100%"}>
             <FaHandshake />
            </Flex>
          <Grid gridTemplateColumns={{lg: "auto auto"}} alignItems={"end"} gap={5}>
          <Text>
          Invitation for business, government agencies and other NGOs to collaborate.
        </Text>
         <ButtonStyled title="Partner with us" />
        </Grid>
        </Box>
       </Grid>
      </Grid>








      {/* <Box h={{md: "50v"}} paddingY={10} textColor={"#123524"} backgroundColor={"#EFE3C2"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10} gap={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
      Our Innovation
      </Text>

      <Grid gridTemplateColumns={{lg: "1fr 1fr  1fr 1fr",md: "1fr 1fr", base: "1fr"}} gap={5}>
        <Grid gap={{base: 5}} justifyContent={"space-between"}>
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743745034/1324_alnwkl.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"}>Renewable energy</Text>
          <Text>
            We partner with private sectors to distribute solar powered boreholes, cooking stoves and install solar panel on roofs. We prioritize the need for clean energy and we advocate for government inventives.
            </Text>
        </Grid>
        <Grid gap={{base: 5}} alignContent={""}>
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743745674/2149094890_k5ajmo.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"} >Ocean conservation</Text>
          <Text>
          We work to remove plastic wastes and marine debris from Nigerian rivers. We also advocate for oil companies to clean up their mess. 
          </Text>
        </Grid>
        <Grid  gap={{base: 5}}>
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746171/2148346117_edddoe.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"}>Land Restoration</Text>
          <Text>
          We work to restore  land and halt degradation, typically through activities like reforestation, soil conservation, and the protection of natural processes. Our work is to enhance biodiversity, restore ecosystem services, and mitigate climate change impact .
          </Text>
        </Grid>
        <Grid gap={{base: 5}}>
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746639/2149571880_y6ofz4.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"}>Climate Education/Advocacy</Text>
          <Text>
          We employ storytelling to advocate for a just environment because activities are destroying the earth and a lot more people are suffering the effect. By identifying the power of story telling, we drive emotional connections, raise awareness, inspire actions and hold oil companies in Nigeria accountable for spillages.
          </Text>
        </Grid>
      </Grid>
      </Flex>
     </Box> */}
    </Box>
  )
}

export default Home
