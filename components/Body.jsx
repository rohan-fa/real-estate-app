import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text, Spacer } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Body() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, green.400, green.500, green.600)" bgClip='text' >Search Your Next Home</Text>
                    <Text mt={6} p={2} fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>Find properties for sale, house and land packages, off-the-plan apartments, rental properties and rooms for rent 🗣</Text>
                   
                    <Button mt={6} fontSize='xl' bg="#006400" color="white" onClick={() =>
                        window.open("https://pawan.live")
                    }>Do Visit</Button>  

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    boxSize="300px" src='https://thumbs.dreamstime.com/b/mobile-191030798.jpg' />
            </Flex>

        </Stack>
    )
}

export default Body;