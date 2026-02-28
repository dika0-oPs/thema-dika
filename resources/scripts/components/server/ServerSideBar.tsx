import React from 'react';
import { NavLink } from 'react-router-dom';
import { ServerContext } from '@/state/server';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faFolderOpen, faDatabase, faCalendarAlt, faNetworkWired, faUsers, faShieldAlt, faTools } from '@fortawesome/free-solid-svg-icons';

const SideBarWrapper = styled.aside`
    width: 260px;
    background: rgba(0, 0, 0, 0.4) !important;
    backdrop-filter: blur(25px);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    height: 100vh;
    padding: 2rem 1.5rem;
    position: sticky;
    top: 0;
`;

const SideBarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px 20px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 12px;
    margin-bottom: 8px;
    transition: all 0.3s ease;

    &.active, &:hover {
        background: rgba(99, 102, 241, 0.15);
        color: #fff;
        box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.1);
    }

    & svg {
        width: 18px;
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: scale(1.1);
        color: #818cf8;
    }
`;

export default () => {
    const id = ServerContext.useStoreState(state => state.server.data?.id);

    return (
        <SideBarWrapper>
            <div style={{ marginBottom: '2rem', paddingLeft: '10px' }}>
                <p style={{ color: '#818cf8', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '2px' }}>MANAGEMENT</p>
            </div>
            
            <SideBarLink to={`/server/${id}`} exact>
                <FontAwesomeIcon icon={faTerminal} /> CONSOLE
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/files`}>
                <FontAwesomeIcon icon={faFolderOpen} /> FILE MANAGER
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/databases`}>
                <FontAwesomeIcon icon={faDatabase} /> DATABASES
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/schedules`}>
                <FontAwesomeIcon icon={faCalendarAlt} /> SCHEDULES
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/network`}>
                <FontAwesomeIcon icon={faNetworkWired} /> NETWORK
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/users`}>
                <FontAwesomeIcon icon={faUsers} /> USERS
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/backups`}>
                <FontAwesomeIcon icon={faShieldAlt} /> BACKUPS
            </SideBarLink>
            
            <SideBarLink to={`/server/${id}/settings`}>
                <FontAwesomeIcon icon={faTools} /> SETTINGS
            </SideBarLink>
        </SideBarWrapper>
    );
};
