import { Box } from '@chakra-ui/react'
import React from 'react'
import { LuTwitter } from 'react-icons/lu'

const Footer = () => {
  return (
    <Box textAlign={"center"} padding={10} >
           {/* Bottom Section */}
           <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img width={"50px"} src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1743737627/Green_ECO_2-removebg-preview_zy9ecy.png" alt="GreenEcoHorizon Logo" className="h-8 mr-2" /> 
          <span className="text-xs">&copy; 2025 GreenEcoHorizon.</span>
        </div>

        <div className="flex space-x-4">
          {/* Facebook */}
          <a href="#" className="text-[#123524] hover:text-blue-600 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

          {/* Twitter */}
          <a href="#" className="text-gray-400 hover:text-black dark:hover:text-gray-100 text-2xl">
         {/* <RiTwitterXLine /> */}
         <LuTwitter />
          </a>

          {/* LinkedIn */}
          <a href="#" className="text-gray-400 hover:text-blue-900 dark:hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/kleon_tech/" className="text-gray-400 hover:text-red-500 dark:hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
    </Box>
  )
}

export default Footer
