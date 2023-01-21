import { HStack, Tag } from "@chakra-ui/react"

const keywords = ["ocean", "nature", "beautiful", "apple", "mango", "kiwi"]

const KeywordSearch = ({ setQuery }: { setQuery: any }) => {
    return (
        <HStack gap={"10px"} wrap={"wrap"} justifyContent={"center"} spacing={4}>
            {keywords.map((keyword) => (
                <Tag onClick={() => setQuery(keyword)} cursor='pointer' size='lg'
                    key={keyword} variant='solid' colorScheme='teal'>
                    {keyword}
                </Tag>
            ))}
        </HStack>
    )
}

export default KeywordSearch