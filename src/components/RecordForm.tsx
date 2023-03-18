import useFormSubmit from './useFormSubmit';

import { Container, Flex } from "styled/Layout.styled";
import { Form, Input, SelectWrapper, Select } from "styled/Form.styled";

import { RecordFormProps, CategoryInterface } from "types";

import { GET_CATEGORIES, GET_RECORDS } from "gql-requests/queries";
import { ADD_RECORD } from 'gql-requests/mutations';
import { useQuery, useMutation } from "@apollo/client";

const RecordForm = (props: RecordFormProps) => {
    const { data } = useQuery(GET_CATEGORIES);
console.log(data)
    const [addRecord] = useMutation(ADD_RECORD, {
        refetchQueries: [
            {query: GET_RECORDS},
            'records'
          ],
    });

    const requestCallback = addRecord;
    const id = props.requestType === "update" ? props.category?.id : null;
    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form onSubmit={(e) => {
                        useFormSubmit(e, requestCallback, id);
                        props.closeModal();
                    }}>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="date" name="createdAt" placeholder="Date" required />
                        <Input marginBottom="1rem" type="number" name="money" placeholder="How much?" required />
                        <SelectWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                            <Select name="categoryID" placeholder="Category">
                                <option>No category</option>
                                {data?.categories.length && data.categories.map((category: CategoryInterface) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </Select>
                        </SelectWrapper>
                        <Input marginBottom="1rem" type="text" name="description" placeholder="Description" />
                        <Input type="submit" value="Submit" />
                    </Flex>
                </Form>
            </Flex>
        </Container>
    );
}

export default RecordForm;