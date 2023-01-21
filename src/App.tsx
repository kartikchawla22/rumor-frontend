import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  HStack,
  Flex,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "./components/header"
import ImageCard from "./components/image-card"
import KeywordSearch from "./components/keyword-search"
import Paginate from "./components/paginate"
import Search from "./components/search"
import { getImages } from "./controller/controller"

export const App = () => {
  const [images, setImages] = useState<Array<any>>()
  const [query, setQuery] = useState<string>("")
  const [page, setPage] = useState<number>(1)

  const getAllImages = async () => {

    try {
      const { data } = await getImages({ page, query })
      setImages(data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (page === 1 && query) {
      getAllImages()
    } else {
      setPage(1)
    }
  }, [query])

  useEffect(() => {
    if (query) {
      getAllImages()
    }
  }, [page])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Flex direction={"column"} minH="100%" gap={"30px"} p={3}>
          <HStack justifyContent={"center"}>
            <Search query={query} setQuery={setQuery} />
          </HStack>
          <KeywordSearch setQuery={setQuery} />
          <VStack spacing={8}>
            {images?.map((image, index) => {
              return <ImageCard image={image} index={index} />
            })}
            <Paginate disabled={!query} page={page} setPage={setPage} />
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}