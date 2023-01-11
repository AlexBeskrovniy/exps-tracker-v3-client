import { ModalWrapper } from "./styled/Details.styled";
import { Flex } from "./styled/Layout.styled";
import CloseButton from "./CloseButton";
import { Backdrop } from "./styled/Backdrop.styled";

interface ModalProps {
    open: 'init' | 'open' | 'closed'
    closeModal: () => void
    children: React.ReactNode
}

const Modal = (props: ModalProps) => {
    return(
        <>
            <Backdrop open={props.open} onClick={props.closeModal}/>
            <ModalWrapper open={props.open}>
                <Flex padding=".5rem" justify="flex-end">
                    <CloseButton onClick={props.closeModal} />
                </Flex>
                {props.children}
            </ModalWrapper>
        </>
    );
}

export default Modal;