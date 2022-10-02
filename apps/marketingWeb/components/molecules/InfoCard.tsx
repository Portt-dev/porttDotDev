import React from 'react'
import { Box, Flex, Heading, Text, Button} from '@chakra-ui/react'
import Image from 'next/image'
const InfoCard: React.FC<{heading?: string, buttonText?: string, image?: string}> = ({ heading, buttonText, image }) => {
    return (
        <Box bg='white' rounded={25} width={400} padding={6} height={400}>
            <Flex h='full' w='full' direction='column' justify='space-between'>
                <Heading fontSize='40px'>{heading}</Heading>
                {buttonText && (
                    <Button alignSelf='flex-start' variant='solid' _hover={{bg: 'brand.black'}}>
                        <Image width='20px' height='20px' src='/assets/Github2.svg' alt='github logo'/> 
                        <Text as='span' ml={2}>{buttonText}</Text> 
                    </Button>
                )}
            </Flex>
        </Box>
    )
}

export default InfoCard 