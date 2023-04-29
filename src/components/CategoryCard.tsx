import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Flex } from "styled/Layout.styled";
import { CardHeading, Text } from "styled/Text.styled";
import { CardWrapper } from "styled/Details.styled";
import { RoundButton } from "styled/RoundButton.styled";

import ImageWrapper from "styled/ImageWrapper.styled";
import DeleteConfirm from "./DeleteConfirm";
import CategoryForm from "components/CategoryForm";

interface Modal {
    useModal: (content: JSX.Element) => void
    closeModal: () => void
}

interface CategoryInterface {
    id: string;
    name: string;
    description: string | undefined
}

const CategoryCard = (props: CategoryInterface) => {
    const [open, setOpen] = useState(false);
    const { useModal, closeModal }: Modal = useOutletContext();

    const toggleOpenCard = () => {
        setOpen(!open);
    }

    return (
        <CardWrapper onClick={toggleOpenCard}>
            <Flex direction="column" gap=".5rem">
                <CardHeading>{props.name}</CardHeading>
                {open && (
                    <Flex width="100%" justify="space-between">
                        <Text>{props.description ? props.description : "No description"}</Text>
                        <Flex padding="0 0 .5rem 0" justify="end" gap="1rem">
                        <RoundButton onClick={() => useModal(<CategoryForm closeModal={closeModal} requestType={"update"} category={props}/>)}>
                            <ImageWrapper size="1rem">
                                <svg>
                                    <use href="#gears"></use>
                                </svg>
                            </ImageWrapper>
                        </RoundButton>
                        <RoundButton onClick={() => useModal(<DeleteConfirm closeModal={closeModal} id={props.id} dataType={'category'} />)}>
                            <ImageWrapper size="1rem">
                                <svg>
                                    <use href="#trash-bin"></use>
                                </svg>
                            </ImageWrapper>
                        </RoundButton>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </CardWrapper>
    );
}

export default CategoryCard;