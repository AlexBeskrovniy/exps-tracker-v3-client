import { Container, Flex } from "../components/styled/Layout.styled";
import { Form, Input } from "../components/styled/Form.styled";

const CategoryForm = () => {
    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form>
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