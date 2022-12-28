import { ModalWrapper, Flex } from "./styled/Layout.styled";
import CloseButton from "./CloseButton";
import { Backdrop } from "./styled/Backdrop.styled";

interface ModalProps {
    open: 'init' | 'open' | 'closed'
    closeDrawer: () => void
    children: React.ReactNode
}

const Modal = (props: ModalProps) => {
    return(
        <>
            <Backdrop open={props.open} onClick={props.closeDrawer}/>
            <ModalWrapper >
                <Flex padding=".5rem" justify="flex-end">
                    <CloseButton onClick={props.closeDrawer} />
                </Flex>
                {props.children}
            </ModalWrapper>
        </>
    );
}

export default Modal;