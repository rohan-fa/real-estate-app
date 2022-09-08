import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FaLocationArrow } from 'react-icons/fa'
import { BsInfoSquareFill } from 'react-icons/bs'
import { AiFillDatabase } from 'react-icons/ai'




function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="#006400" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text paddingTop='3' paddingBottom='3' color='gray.700' fontWeight="bold" fontSize="2xl">Its costing up to 10 per cent more and taking months longer to be able to move in, but buyers armed with record-low interest rates are taking it in their stride</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="#006400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={AiFillDatabase} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                             Financial Info
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={BsInfoSquareFill} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Contact Info
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={FaLocationArrow} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Location
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile