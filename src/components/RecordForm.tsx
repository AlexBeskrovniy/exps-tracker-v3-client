import useFormSubmit from './useFormSubmit';

import { Container, Flex } from "styled/Layout.styled";
import { Form, Input, SelectWrapper, Select } from "styled/Form.styled";
import FormSelect from './FormSelect';
import { RecordFormProps, CategoryInterface } from "types";

import { GET_CATEGORIES, GET_RECORDS } from "gql-requests/queries";
import { ADD_RECORD, UPDATE_RECORD } from 'gql-requests/mutations';
import { useQuery, useMutation } from "@apollo/client";

const RecordForm = (props: RecordFormProps) => {
    const { data } = useQuery(GET_CATEGORIES);

    const [addRecord] = useMutation(ADD_RECORD, {
        refetchQueries: [
            {query: GET_RECORDS},
            'records'
          ],
    });

    const [updateRecord] = useMutation(UPDATE_RECORD, {
        refetchQueries: [
            {query: GET_RECORDS},
            'records'
          ],
    });
    const requestCallback = props.requestType === "update" ? updateRecord : addRecord;
    const selectDefaultValue = props.requestType === "update" ? props.record?.categoryID : "";
    const id = props.requestType === "update" ? props.record?.id : null;
    const defaultDate = props.record?.createdAt && new Date(+props.record?.createdAt).toLocaleDateString().split('.').reverse().join('-');
    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form onSubmit={(e) => {
                        useFormSubmit(e, requestCallback, id);
                        props.closeModal();
                    }}>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="date" name="createdAt" placeholder="Date" required defaultValue={defaultDate}/>
                        <Input marginBottom="1rem" type="number" name="money" placeholder="How much?" required defaultValue={props.record?.money}/>
                        <FormSelect 
                            categories={data?.categories}
                            defaultValue={selectDefaultValue}
                        />
                        <Input marginBottom="1rem" type="text" name="description" placeholder="Description" defaultValue={props.record?.description}/>
                        <Input type="submit" value="Submit" />
                    </Flex>
                </Form>
            </Flex>
        </Container>
    );
}

export default RecordForm;