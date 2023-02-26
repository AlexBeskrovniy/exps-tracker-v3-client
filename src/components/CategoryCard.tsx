import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Flex } from "../components/styled/Layout.styled";
import { CardHeading, Text } from "../components/styled/Text.styled";
import { CardWrapper } from "../components/styled/Details.styled";
import { RoundButton } from "./styled/RoundButton.styled";

import ImageWrapper from "./styled/ImageWrapper.styled";
import DeleteConfirm from "./DeleteConfirm";

interface Modal {
    useModal: (content: JSX.Element) => void
    closeModal: () => void
}

interface CategoryInterface {
    id: string;
    name: string;
    description: string | null
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
                        <RoundButton>
                            <ImageWrapper size="1rem">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M305.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L301 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L196 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C170.9 8.4 164.2 8 157.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L112 56.1c-13.3 5-25.5 12.1-36.2 20.9L47.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C29.6 161.9 29 168.9 29 176s.6 14.1 1.7 20.9L8.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM109 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM501.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L580.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L312.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM461 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                </svg>
                            </ImageWrapper>
                        </RoundButton>
                        <RoundButton onClick={() => useModal(<DeleteConfirm closeModal={closeModal} categoryId={props.id}/>)}>
                            <ImageWrapper size="1rem">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
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