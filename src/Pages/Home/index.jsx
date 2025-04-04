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
        To build 100,000 times more climate resilient communities by 2040
        </Text>
    </Flex>
     </Flex>
     </Box>


     {/* About Us */}
     <Box h={{md: "60vh"}} paddingY={10} textColor={"#123524"} backgroundColor={"#EFE3C2"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10} gap={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
        About Us
      </Text>
      <Text fontSize={"14px"} paddingX={{md: "50px", lg: "200px"}}>
      The Climate Resiliency is a startup youth led Organization working for a sustainable environment in Nigeria. Just like a doctor treats a patient according to their diseases so also we work on different communities according to their specific environmental needs. We try out new innovations to support the most vulnerable, frontline and marginalised communities adapt to and mitigate the gross  impacts of climate change. Our Organization  is dedicated to environmental sustainability and climate resilience, with a strong focus on green technology, climate adaptation, and the connection between environmental health and public well-being. We develop innovative, technology-driven solutions to address pressing challenges such as pollution, deforestation, and carbon emissions. We harness cutting-edge solutions such as geospatial mapping (GIS), artificial intelligence (AI), and data-driven analytics to tackle pressing environmental challenges. Through research, advocacy, and collaboration, we empower communities and policymakers to build a cleaner, healthier, and more sustainable future
      </Text>
      </Flex>
     </Box>


      {/*Our Mission*/}
      <Box h={{md: "50vh"}} paddingY={10} textColor={"#e3fc58"} backgroundColor={"#123524"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10} gap={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
        Our Mission
      </Text>
      <Text fontSize={"14px"} paddingX={{md: "50px", lg: "300px"}}>
      To  help the most vulnerable communities adapt to and mitigate the gross impacts of climate change.     
      </Text>
      </Flex>
     </Box>


      {/*Our Innovation*/}
      <Box h={{md: "50v"}} paddingY={10} textColor={"#123524"} backgroundColor={"#EFE3C2"} display={"grid"} >
      <Flex justifyContent={"center"} flexDirection={"column"} textAlign={"center"} paddingX={10} gap={10}>
      <Text fontSize={"4xl"} fontWeight={600}>
      Our Innovation
      </Text>

      <Grid gridTemplateColumns={{md: "1fr 1fr  1fr 1fr", base: "1fr"}} gap={5}>
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
     </Box>
    </Box>
  )
}

export default Home
