import {
    Link,
    VStack,
    Image,
    HStack,
    Stack,
    Modal,
    ModalContent,
    ModalCloseButton,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    Flex,
    useBreakpointValue
} from "@chakra-ui/react"
import { useState } from "react";

const ImageCard = ({ image, index }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const boxVariant = useBreakpointValue(
        {
            md: "500px",
            sm: "350px",
            lg: "700px",
        },
        {
            fallback: 'md',
        },
    )

    const imageVariant = useBreakpointValue(
        {
            md: "400px",
            sm: "300px",
            lg: "600px",
        },
        {
            fallback: 'md',
        },
    )

    return (
        <VStack>
            <HStack alignSelf={"flex-start"}>
                <Image boxSize='40px'
                    borderRadius={"50%"}
                    src={image.user.profileImage || "/profile.jpeg"}
                    alt={image.user.name + "Profile Image"}
                    key={image.user.name + index} />
                <Link href={image.user.profile} isExternal>
                    {image.user.name}
                </Link>
            </HStack>
            <Stack
                onClick={() => setIsOpen(true)}
                boxSize={boxVariant}
                padding={"10px"}
                backgroundColor={"teal"}
                justifyContent="center"
                alignItems={"center"}>
                <Image
                    boxSize={imageVariant}
                    maxWidth={"100%"}
                    maxHeight={"100%"}
                    objectFit='cover'
                    src={image.imageURL}
                    alt={image.altText}
                    key={image.altText} />
            </Stack>
            <Modal size={"full"} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{image.altText}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display={"flex"}
                        padding={10} >
                        <Flex
                            onClick={() => setIsOpen(true)}
                            backgroundColor={"teal"}
                            justifyContent="center"
                            padding={20}
                            alignItems={"center"}>
                            <Image
                                maxWidth={"100%"}
                                maxHeight={"100%"}
                                objectFit='cover'
                                src={image.imageURL}
                                alt={image.altText}
                                key={image.altText} />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </VStack>
    )
}
export default ImageCard