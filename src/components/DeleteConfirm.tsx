import { Flex } from "styled/Layout.styled";
import { Text } from "styled/Text.styled";
import { RoundButton } from "styled/RoundButton.styled";

import ImageWrapper from "styled/ImageWrapper.styled";

import { DELETE_CATEGORY, DELETE_RECORD } from "gql-requests/mutations";
import { GET_CATEGORIES, GET_RECORDS } from "gql-requests/queries";
import { useMutation } from "@apollo/client";

interface ConfirmFormProps {
    closeModal: () => void;
    id: string;
    dataType: string;
}

const DeleteConfirm = (props: ConfirmFormProps) => {
    const [deleteCategory] = useMutation(DELETE_CATEGORY, {
        refetchQueries: [
            {query: GET_CATEGORIES},
            'categories'
          ],
    });
    const [deleteRecord] = useMutation(DELETE_RECORD, {
        refetchQueries: [
            {query: GET_RECORDS},
            'records'
          ],
    });

    const destroy = props.dataType === 'record' ? deleteRecord : deleteCategory;

    return (
        <Flex direction="column" gap="1rem" justify="center">
            <Text>Are you sure?</Text>
            <Flex width="100%" justify="space-around">
                <RoundButton onClick={props.closeModal}>
                    <ImageWrapper size="1rem">
                        <svg>
                            <use href="#x"></use>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
                <RoundButton onClick={() => {destroy(
                        { variables: {
                            id: props.id
                        }});
                        props.closeModal();
                    }
                }>
                    <ImageWrapper size="1rem">
                        <svg>
                            <use href="#check"></use>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
            </Flex>
        </Flex>
    );
}

export default DeleteConfirm;