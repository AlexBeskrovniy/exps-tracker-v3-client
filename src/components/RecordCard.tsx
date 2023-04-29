import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { CardWrapper } from "styled/Details.styled";
import { Flex } from "styled/Layout.styled";
import { CardHeading, DateText, Text } from "styled/Text.styled";
import { RoundButton } from "styled/RoundButton.styled";
import ImageWrapper from "styled/ImageWrapper.styled";
import DeleteConfirm from "./DeleteConfirm";
import RecordForm from "./RecordForm";

import { RecordsInterface, Modal } from "types";

const RecordCard = (props: RecordsInterface) => {
    const [open, setOpen] = useState(false);
    const { useModal, closeModal }: Modal = useOutletContext();

    const toggleOpenCard = () => {
        setOpen(!open);
    }

    return (
        <CardWrapper onClick={toggleOpenCard}>
            <Flex width="100%" justify="space-between">
                <DateText>{new Date(+props.createdAt).toDateString()}</DateText>
                <CardHeading>{props.money}</CardHeading>
            </Flex>
            {open && (
                <>
                <Flex width="100%" justify="center">
                <Text>{props.description}</Text>
                </Flex>
                <Flex width="100%" justify="space-between">
                    <CardHeading>{props.categoryName}</CardHeading>
                    <Flex width="100%" padding="0 0 .5rem 0" justify="end" gap="1rem">
                        <RoundButton onClick={() => useModal(<RecordForm closeModal={closeModal} requestType={"update"} record={props}/>)}>
                            <ImageWrapper size="1rem">
                            <svg>
                                <use href="#gears"></use>
                            </svg>
                            </ImageWrapper>
                        </RoundButton>
                        <RoundButton onClick={() => useModal(<DeleteConfirm closeModal={closeModal} id={props.id} dataType={'record'} />)}>
                            <ImageWrapper size="1rem">
                                <svg>
                                    <use href="#trash-bin"></use>
                                </svg>
                            </ImageWrapper>
                        </RoundButton>
                    </Flex>
                </Flex>
                </>
            )}
            
        </CardWrapper>
    );
}

export default RecordCard;