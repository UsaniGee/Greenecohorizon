import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Logo from './Logo';
import Links from './Links';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.2; 
      setScrolled(scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex
      className='fixed z-20 w-full justify-between'
      alignItems='center'
      bg={scrolled ? 'rgba(255, 255, 255)' : ''}
      color={scrolled ? 'black' : 'white'}
      transition="background-color 0.3s ease, color 0.3s ease"
      px={4}
      py={2}
    >
      <Logo />
      <Links />
      <Box />
    </Flex>
  );
};

export default Navbar;
