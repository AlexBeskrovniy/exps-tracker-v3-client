import useFormSubmit from './useFormSubmit';

import { Container, Flex } from 'styled/Layout.styled';
import { Form, Input } from 'styled/Form.styled';

import { ADD_CATEGORY, UPDATE_CATEGORY } from 'gql-requests/mutations';
import { GET_CATEGORIES } from 'gql-requests/queries';
import { useMutation } from '@apollo/client';

interface CategoryFormProps {
    closeModal: () => void;
    requestType: string;
    category?: CategoryInterface
}

interface CategoryInterface {
    id: string;
    name: string;
    description: string | null
}

const CategoryForm = (props: CategoryFormProps) => {
    const [addCategory] = useMutation(ADD_CATEGORY, {
        refetchQueries: [
            {query: GET_CATEGORIES},
            'categories'
          ],
    });

    const [updateCategory] = useMutation(UPDATE_CATEGORY, {
        refetchQueries: [
            {query: GET_CATEGORIES},
            'categories'
          ],
    });

    const requestCallback = props.requestType === "update" ? updateCategory : addCategory;
    const id = props.requestType === "update" ? props.category?.id : null;

    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form onSubmit={(e) => {
                        useFormSubmit(e, requestCallback, id);
                        props.closeModal();
                    }}>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="text" name="name" placeholder="Name" required  defaultValue={props.category?.name}/>
                        <Input marginBottom="1rem" type="text" name="description" placeholder="Description" defaultValue={props.category?.description} />
                        <Input type="submit" value="Submit" />
                    </Flex>
                </Form>
            </Flex>
        </Container>
    );
}

export default CategoryForm;