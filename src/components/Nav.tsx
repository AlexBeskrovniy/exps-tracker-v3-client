import { NavLink } from "react-router-dom";

import { Flex, NavLinkWrapper } from "./styled/Layout.styled";

interface NavProps {
    closeDrawer: () => void 
}

const Nav = (props: NavProps) => {
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
        </Flex>
    );
}

export default Nav;