import { useState, useContext } from "react";
import { ThemeContext } from 'styled-components'
import { useAuthContext } from "../providers/AuthProvider";

import { Container, Flex } from "./styled/Layout.styled";
import { StyledHeader } from "./styled/Details.styled";
import ImageWrapper from "./styled/ImageWrapper.styled";
import Drawer from "./Drawer";
import Nav from "./Nav";

type DrawerState = 'init' | 'open' | 'closed';

const Header = () => {
    const { user }: any = useAuthContext();
    const [open, setOpen] = useState<DrawerState>('init');
    const [content, setContent] = useState(<></>);

    const openDrawer = () => setOpen('open');
    const closeDrawer = () => setOpen('closed');

    const useDrawer = (content: JSX.Element) => {
        setContent(content);
        openDrawer();
    }

    const { userTheme, changeTheme } = useContext(ThemeContext);
    const themes = ['neon', 'classic'];
    return(
        <StyledHeader>
            <Drawer open={open} closeDrawer={closeDrawer}>
                { content }
            </Drawer>
            <Container>
                <Flex justify="space-between" align="center">
                    <div onClick={() => useDrawer(<Nav closeDrawer={closeDrawer} />)}>
                        <ImageWrapper size="2rem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" preserveAspectRatio="none">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </ImageWrapper>
                    </div>
                    {user && <span>Hello, {user.name}</span>}
                    <select
                        defaultValue={ themes.find(theme => theme === userTheme) } 
                        onChange={ (e) => changeTheme(e.target.value) }
                        hidden
                    >
                        {themes.map(theme => (
                            <option key={theme} value={theme}>{theme.toUpperCase()}</option>
                        ))}
                    </select>
                </Flex>
            </Container>
        </StyledHeader>
    );
}

export default Header;