import { Flex } from "../components/styled/Layout.styled";
import { PageHeading, CardHeading, DateText, Text } from "../components/styled/Text.styled";
import { CardWrapper } from "../components/styled/Details.styled";
import Button from "../components/styled/Button.styled";

const Records = () => {
    return(
        <>
           <PageHeading>Records History</PageHeading>

            <CardWrapper>
                <Flex direction="column" gap=".5rem">
                    <Flex width="100%" justify="space-between">
                        <DateText>Tue Jan 05 2023</DateText>
                        <CardHeading>Category</CardHeading>
                    </Flex>
                    <Flex width="100%" justify="flex-end">
                        <CardHeading>16.340.045</CardHeading>
                    </Flex>
                        <Text>Description</Text>
                    <Button width="95%" marginBottom="1rem">Edit</Button>
                </Flex>
            </CardWrapper> 
        </>
    );
}

export default Records;