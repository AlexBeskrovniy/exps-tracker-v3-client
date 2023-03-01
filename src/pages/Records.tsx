import { useOutletContext } from "react-router-dom";
import { PageHeading } from "styled/Text.styled";
import RecordCard from "components/RecordCard";

interface Modal {
    useModal: (content: JSX.Element) => void
}

const Records = () => {
    const { useModal }: Modal = useOutletContext();

    return(
        <>
           <PageHeading>Records History</PageHeading>
            <RecordCard />
            
        </>
    );
}

export default Records;