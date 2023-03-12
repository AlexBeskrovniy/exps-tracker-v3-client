import useFormSubmit from './useFormSubmit';

import { Container, Flex } from 'styled/Layout.styled';
import { Form, Input } from 'styled/Form.styled';

import { ADD_CATEGORY } from 'gql-requests/mutations';
import { GET_CATEGORIES } from 'gql-requests/queries';
import { useMutation } from '@apollo/client';

interface CategoryFormProps {
    closeModal: () => void
}

const CategoryForm = (props: CategoryFormProps) => {
    const [addCategory] = useMutation(ADD_CATEGORY, {
        refetchQueries: [
            {query: GET_CATEGORIES},
            'categories'
          ],
    });

    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form onSubmit={(e) => {
                        useFormSubmit(e, addCategory);
                        props.closeModal();
                    }}>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="text" name="name" placeholder="Name" required />
                        <Input marginBottom="1rem" type="text" name="description" placeholder="Description" />
                        <Input type="submit" value="Submit" />
                    </Flex>
                </Form>
            </Flex>
        </Container>
    );
}

export default CategoryForm;