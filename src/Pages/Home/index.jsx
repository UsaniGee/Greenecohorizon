import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box>
      {/* Header */}
     <Box>
     <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743718714/15256_wkmoxw.jpg' alt='' w={"full"} h={"80vh"} objectFit={"cover"} objectPosition={"100% 50%"} className='blur-[px]'/>

     <Flex justifyContent={"center"} className='absolute top-20  w-full h-[60vh] px-5'>
     <Flex bg="rgba(90, 113, 84, 0.8)" p={10} borderRadius="md" textColor="#e3fc58" flexDirection={"column"} justifyContent={"center"} gap={5}>
        <Text fontSize={{md: "8xl", base: "5xl"}} textAlign="center" fontWeight={600} lineHeight={1}>Green Eco Horizon</Text>
        <Text textAlign="center" fontSize={"2xl"} fontWeight={400} lineHeight={1}>
          To build 50,000 times more climate resilient communities by 2040
        </Text>
    </Flex>
     </Flex>
     </Box>


     {/* About Us */}
     <Box h={{md: "50vh"}} paddingY={10} textColor={"#123524"} backgroundColor={"#EFE3C2"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
        About Us
      </Text>
      <Text fontSize={"14px"} paddingX={{md: "300px"}}>
      The Climate Resiliency is a startup youth led organization working for a sustainable environment in Nigeria. Just like a doctor treats a patient according to their diseases so also we work on different communities according to their specific environmental needs. We try out new innovations to support the most vulnerable, frontline and marginalized communities adapt to and mitigate the gross  impacts of climate change. We mainly work on holding environmental violators and policymakers accountable.  Our thematic areas go across land, ocean, agriculture, clean energy, clean transportation and water.
      </Text>
      </Flex>
     </Box>


      {/*Our Mission*/}
      <Box h={{md: "50vh"}} paddingY={10} textColor={"#e3fc58"} backgroundColor={"#123524"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
        Our Mission
      </Text>
      <Text fontSize={"14px"} paddingX={{md: "300px"}}>
      We want a sustainable environment that allows everyone to thrive . That is why we  hold environmental violators accountable and  introduce  projects that have positive impacts  on the environment in order to accelerate a just environment in Nigeria. 
      </Text>
      </Flex>
     </Box>


      {/*Our Innovation*/}
      <Box h={{md: "50v"}} paddingY={10} textColor={"#123524"} backgroundColor={"#EFE3C2"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
      Our Innovation
      </Text>

      <Grid gridTemplateColumns={{md: "1fr 1fr  1fr 1fr", base: "1fr"}} gap={5}>
        <Grid gap={{base: 5}}>
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743745034/1324_alnwkl.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"}>Renewable energy</Text>
          <Text>
            We partner with private sectors to distribute solar powered boreholes, cooking stoves and install solar panel on roofs. We prioritize the need for clean energy and we advocate for government inventives.
            </Text>
        </Grid>
        <Grid gap={{base: 5}} >
          <Image className='aspect-square object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743745674/2149094890_k5ajmo.jpg' alt=''/>
          <Text fontWeight={600} fontSize={"20px"}>Ocean conservation</Text>
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
     </Box>
    </Box>
  )
}

export default Home
