import { Flex } from "../components/styled/Layout.styled";
import { Text } from "../components/styled/Text.styled";
import { RoundButton } from "./styled/RoundButton.styled";

import ImageWrapper from "./styled/ImageWrapper.styled";

import { DELETE_CATEGORY } from "../gql-requests/mutations";
import { GET_CATEGORIES } from "../gql-requests/queries";
import { useMutation } from "@apollo/client";

interface CategoryFormProps {
    closeModal: () => void
    categoryId: string
}

const DeleteConfirm = (props: CategoryFormProps) => {
    const [deleteCategory, {data, error}] = useMutation(DELETE_CATEGORY, {
        refetchQueries: [
            {query: GET_CATEGORIES},
            'categories'
          ],
    });
    if(data) console.log(data);
    if(error) console.log(error);

    return (
        <Flex direction="column" gap="1rem" justify="center">
            <Text>Are you sure?</Text>
            <Flex width="100%" justify="space-around">
                <RoundButton onClick={props.closeModal}>
                    <ImageWrapper size="1rem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
                <RoundButton onClick={() => {deleteCategory(
                        { variables: {
                            deleteCategoryId: props.categoryId
                        }});
                        props.closeModal();
                    }
                }>
                    <ImageWrapper size="1rem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
            </Flex>
        </Flex>
    );
}

export default DeleteConfirm;