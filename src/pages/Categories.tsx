import { useOutletContext } from "react-router-dom";

import { Flex } from "styled/Layout.styled";
import { PageHeading } from "styled/Text.styled";
import { RoundButton } from "styled/RoundButton.styled";
import ImageWrapper from "styled/ImageWrapper.styled";
import CategoryCard from "components/CategoryCard";
import CategoryForm from "components/CategoryForm";

import { GET_CATEGORIES } from "gql-requests/queries";
import { useQuery } from "@apollo/client";

interface Modal {
    useModal: (content: JSX.Element) => void
    closeModal: () => void
}

interface CategoryInterface {
    id: string;
    name: string;
    description: string | undefined
}

const Categories = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const { useModal, closeModal }: Modal = useOutletContext();
    if (loading) return "Loading...";
    if(error) return `Error: ${error}`;
    return(
        <>
            <Flex justify="space-between">
                <PageHeading>Categories</PageHeading>
                <RoundButton onClick={() => useModal(<CategoryForm closeModal={closeModal} requestType={"create"} />)}>
                    <ImageWrapper size="1rem">
                        <svg>
                            <use href="#plus"></use>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
            </Flex>
            {data.categories.map((category: CategoryInterface) => (
                <CategoryCard
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    description={category.description}
                />
            ))}
        </>
    );
}

export default Categories;