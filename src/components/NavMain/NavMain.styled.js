import styled from 'styled-components';
import { COLORS } from '../../utils/ConstantsGraphics';
import {
    NavLink
} from 'react-router-dom';

const NavMainstyled = styled.nav`
    background-color: ${COLORS.text}
    display: block;
`;

const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    padding: 1em;
    color: #FFF;
    text-decoration: none;
    &.active {
        background-color: ${COLORS.complement};
    }
`;

export {
    NavMainstyled,
    NavLinkStyled
}