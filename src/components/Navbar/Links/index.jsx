import { Box, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const Links = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Desktop View */}
      <Flex gap={6} display={{ base: 'none', md: 'flex' }}  >
        <NavLinks />
      </Flex>

      {/* Mobile View - Hamburger Menu */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="green"
          onClick={onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex flexDirection="column" gap={4}>
                <NavLinks onClose={onClose} />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};


const NavLinks = ({ onClose }) => (
  <>
    {[
      { name: 'About Us', href: '/about-us' },
      { name: 'What We Do', href: '/what-we-do' },
      { name: 'Contact Us', href: '/contact-us' },     
    ].map((link) => (
      <Link
        key={link.name}
        href={link.href}
        fontSize="md"
        fontWeight={600}
        _hover={{ color: 'rgba(000, 255, 000, 1)' }}
        onClick={onClose}         
      >
        {link.name}
      </Link>
    ))}
  </>
);

export default Links;

