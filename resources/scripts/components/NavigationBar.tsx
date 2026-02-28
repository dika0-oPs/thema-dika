import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faUserCircle, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.45) !important;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 50;
`;

const NavBranding = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 12px;
    
    & .logo-text {
        font-weight: 900;
        font-size: 1.4rem;
        color: #fff;
        letter-spacing: 2px;
        background: linear-gradient(to right, #fff, #6366f1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;

        &:hover, &.active {
            color: #fff;
        }
    }
`;

export default () => {
    const user = useStoreState(state => state.user.data);

    return (
        <Nav>
            <NavBranding to={'/'}>
                <span className={'logo-text'}>DIKA MARKET</span>
            </NavBranding>

            <NavLinks>
                <NavLink to={'/'} exact>
                    <FontAwesomeIcon icon={faLayerGroup} /> DASHBOARD
                </NavLink>
                <NavLink to={'/account'}>
                    <FontAwesomeIcon icon={faUserCircle} /> PROFILE
                </NavLink>
                {user.root_admin && (
                    <a href={'/admin'}>
                        <FontAwesomeIcon icon={faCogs} /> ADMIN
                    </a>
                )}
                <a href={'/auth/logout'}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
            </NavLinks>
        </Nav>
    );
};
