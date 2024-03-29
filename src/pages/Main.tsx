import { useOutletContext } from "react-router-dom";

import { Flex } from "styled/Layout.styled";
import { PageHeading } from "styled/Text.styled";
import { RoundButton } from "styled/RoundButton.styled";
import ImageWrapper from "styled/ImageWrapper.styled";
import RecordForm from "components/RecordForm";
import ThisMonthChart from 'charts/ThisMonthChart';
import ThisYearChart from 'charts/ThisYearChart';
import ThisMonthCategoriesChart from 'charts/ThisMonthCategoriesChart';
import ThisYearCategoriesChart from 'charts/ThisYearCategoriesChart';

import { Modal } from "types";
import { GET_RECORDS } from "gql-requests/queries";
import { useQuery } from "@apollo/client";

const Main = () => {
    const { loading, error, data } = useQuery(GET_RECORDS);
    const { useModal, closeModal }: Modal = useOutletContext();
    if (loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;
    if(data) console.log(data.records);

    return (
        <>
            <Flex justify="space-between">
                <PageHeading>Main</PageHeading>
                <RoundButton onClick={() => useModal(<RecordForm closeModal={closeModal} requestType={"create"} />)}>
                    <ImageWrapper size="1rem">
                        <svg>
                            <use href="#plus"></use>
                        </svg>
                    </ImageWrapper>
                </RoundButton>
            </Flex>
            <ThisMonthChart records={data.records} />
            <ThisYearChart records={data.records} />
            <ThisMonthCategoriesChart records={data.records} />
            <ThisYearCategoriesChart records={data.records} />
        </>
    );
}

export default Main;