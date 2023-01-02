import { useState } from 'react';
import { Outlet } from "react-router-dom";

import { Container } from "../components/styled/Layout.styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import RecordForm from '../components/RecordForm';

type ModalState = 'init' | 'open' | 'closed';

const MasterPage = () => {
    const [open, setOpen] = useState<ModalState>('init');

    const openModal = () => setOpen('open');
    const closeModal = () => setOpen('closed');

    return(
        <>
            <Header />
                <Container>
                    <Outlet context={openModal} />
                </Container>
                <Modal open={ open } closeModal={ closeModal } children={ <RecordForm /> } />
            <Footer />
        </>
    );
};

export default MasterPage;