import {
    Input,
    FormControl,
    IconButton,
    HStack
} from "@chakra-ui/react"

import {
    SearchIcon,
} from "@chakra-ui/icons"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


const Search = ({ setQuery, query }: { setQuery: any, query: string }) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setSearchValue(query)
    }, [query])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setQuery(searchValue);
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <FormControl>
                    <Input
                        id="search"
                        type="text"
                        placeholder="search for an image"
                        onChange={handleSearchChange}
                        autoComplete="off"
                        value={searchValue}
                    />
                </FormControl>
                <IconButton aria-label='Search' type="submit" icon={<SearchIcon />} />
            </HStack>
        </form>
    )
}

export default Search