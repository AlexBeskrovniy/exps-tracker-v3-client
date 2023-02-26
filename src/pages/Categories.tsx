import { useOutletContext } from "react-router-dom";

import { Flex } from "../components/styled/Layout.styled";
import { PageHeading } from "../components/styled/Text.styled";
import { RoundButton } from "../components/styled/RoundButton.styled";
import ImageWrapper from "../components/styled/ImageWrapper.styled";
import CategoryCard from "../components/CategoryCard";
import CategoryForm from "../components/CategoryForm";

import { GET_CATEGORIES } from "../gql-requests/queries";
import { useQuery } from "@apollo/client";

interface Modal {
    useModal: (content: JSX.Element) => void
    closeModal: () => void
}

interface CategoryInterface {
    id: string;
    name: string;
    description: string | null
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
                <RoundButton onClick={() => useModal(<CategoryForm closeModal={closeModal} />)}>
                    <ImageWrapper size="1rem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>
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