import { useState } from 'react';
import { Outlet } from "react-router-dom";

import { Container } from "styled/Layout.styled";
import Header from "components/Header";
import Footer from "components/Footer";
import Modal from "components/Modal";

type ModalState = 'init' | 'open' | 'closed';

const MasterPage = () => {
    const [open, setOpen] = useState<ModalState>('init');
    const [content, setContent] = useState(<></>);

    const openModal = () => setOpen('open');
    const closeModal = () => setOpen('closed');

    const useModal = (content: JSX.Element) => {
        setContent(content);
        openModal();
    }

    return(
        <>
            <Header />
                <Container>
                    <Outlet context={{ useModal, closeModal }} />
                </Container>
                <Modal open={ open } closeModal={ closeModal } children={ content } />
            <Footer />
        </>
    );
};

export default MasterPage;