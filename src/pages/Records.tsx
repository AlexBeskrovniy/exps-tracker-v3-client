import { useOutletContext } from "react-router-dom";

import { Flex } from "styled/Layout.styled";
import { PageHeading } from "styled/Text.styled";
import { RoundButton } from "styled/RoundButton.styled";
import ImageWrapper from "styled/ImageWrapper.styled";
import RecordCard from "components/RecordCard";
import RecordForm from "components/RecordForm";

import { Modal,RecordsInterface } from "types";
import { GET_RECORDS } from "gql-requests/queries";
import { useQuery } from "@apollo/client";

const Records = () => {
    const { loading, error, data } = useQuery(GET_RECORDS);
    const { useModal, closeModal }: Modal = useOutletContext();
    if (loading) return "Loading...";
    if(error) return `Error: ${error}`;

    return(
        <>
            <Flex justify="space-between">
            <PageHeading>Records History</PageHeading>
            <RoundButton onClick={() => useModal(<RecordForm closeModal={closeModal} requestType={"create"} />)}>
                    <ImageWrapper size="1rem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
            </Flex>
           {!data ? (
            <h1>No Records</h1>
           ) : (
            data.records.map((record: RecordsInterface) => (
                <RecordCard 
                    key={record.id}
                    id={record.id}
                    money={record.money}
                    categoryID={record.categoryID}
                    categoryName={record.categoryName}
                    description={record.description}
                    createdAt={record.createdAt}
                />
            ))
           )}
            
        </>
    );
}

export default Records;