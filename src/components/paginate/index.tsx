import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";

const Paginate = ({ setPage, page, disabled = false }: { setPage: any, page: number, disabled: boolean }) => {


    const handlePageChange = (direction: "next" | "prev") => {
        if (direction === "next") {
            setPage(page + 1);
        } else {
            setPage(page - 1);
        }
    };
    return (
        <Flex gap={"10px"} justifyContent="center">
            <Button
                as={"button"}
                isDisabled={page === 1 || disabled}
                _disabled={{ cursor: "not-allowed" }}
                onClick={() => handlePageChange("prev")}
                leftIcon={<ArrowBackIcon />} >
                Previous
            </Button>
            <Button
                as={"button"}
                isDisabled={disabled}
                _disabled={{ cursor: "not-allowed" }}
                rightIcon={<ArrowForwardIcon />}
                onClick={() => handlePageChange("next")}>
                Next
            </Button>
        </Flex>
    )
}
export default Paginate