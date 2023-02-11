import { NavLink } from "react-router-dom";

import { useAuthContext } from "../providers/AuthProvider";
import { Flex, NavLinkWrapper } from "./styled/Layout.styled";

interface NavProps {
    closeDrawer: () => void 
}

const Nav = (props: NavProps) => {
    const { onLogout } = useAuthContext();
    return(
        <Flex direction="column" align="flex-start" padding="1rem">
            <NavLinkWrapper onClick={props.closeDrawer}>
                <NavLink to="/main">
                    Main
                </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper onClick={props.closeDrawer}>
                <NavLink to="records">
                    Records
                </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper onClick={props.closeDrawer}>
                <NavLink to="categories">
                    Categories
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

export default Nav;