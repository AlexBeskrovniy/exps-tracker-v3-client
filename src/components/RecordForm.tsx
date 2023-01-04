import { Container, Flex } from "../components/styled/Layout.styled";
import { Form, Input, SelectWrapper, Select } from "../components/styled/Form.styled";
import ImageWrapper from "./styled/ImageWrapper.styled";

const RecordForm = () => {
    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="date" name="date" placeholder="Date" required />
                        <Input marginBottom="1rem" type="number" name="money" placeholder="How much?" required />
                        <SelectWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                            <Select name="category" placeholder="Category">
                                <option>No category</option>
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