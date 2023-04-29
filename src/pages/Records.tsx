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
    if (loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;

    return(
        <>
            <Flex justify="space-between">
            <PageHeading>Records History</PageHeading>
            <RoundButton onClick={() => useModal(<RecordForm closeModal={closeModal} requestType={"create"} />)}>
                    <ImageWrapper size="1rem">
                        <svg>
                            <use href="#plus"></use>
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