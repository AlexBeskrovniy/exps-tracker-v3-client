import { NavLink } from "react-router-dom";

import { useAuthContext } from "../providers/AuthProvider";
import { Flex, NavLinkWrapper } from "./styled/Layout.styled";

interface NavProps {
    closeDrawer: () => void 
}

const AccountNav = (props: NavProps) => {
    const { onLogout } = useAuthContext();

    return(
        <Flex direction="column" align="flex-start" padding="1rem">
            <NavLinkWrapper onClick={props.closeDrawer}>
                <NavLink to="something">
                    Something
                </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper onClick={props.closeDrawer}>
                <NavLink to="settings">
                    Settings
                </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper onClick={onLogout}>
                <a>
                    LogOut
                </a>
            </NavLinkWrapper>
        </Flex>
    );
}

export default AccountNav;