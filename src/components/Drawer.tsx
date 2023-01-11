import { DrawerWrapper } from "./styled/Details.styled";
import { Flex } from "./styled/Layout.styled";
import CloseButton from "./CloseButton";
import { Backdrop } from "./styled/Backdrop.styled";

interface DrawerProps {
    open: 'init' | 'open' | 'closed'
    closeDrawer: () => void
    children: React.ReactNode
}

const Drawer = (props: DrawerProps) => {
    return(
        <>
            <Backdrop open={props.open} onClick={props.closeDrawer}/>
            <DrawerWrapper open={props.open} >
                <Flex padding=".5rem" justify="flex-end">
                    <CloseButton onClick={props.closeDrawer} />
                </Flex>
                {props.children}
            </DrawerWrapper>
        </>
    );
}

export default Drawer;