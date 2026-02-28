import React from 'react';
import { ServerContext } from '@/state/server';
import RenameServerBox from '@/components/server/settings/RenameServerBox';
import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';
import styled from 'styled-components';

const SettingsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const HeaderTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    padding-top: 2rem;
`;

export default () => {
    return (
        <div>
            <HeaderTitle>Server Settings</HeaderTitle>
            <p style={{ color: 'rgba(255,255,255,0.4)', paddingLeft: '2rem', marginBottom: '2rem' }}>
                Control your service identity and system state at Dika Market.
            </p>
            
            <SettingsGrid>
                <RenameServerBox />
                <ReinstallServerBox />
            </SettingsGrid>
        </div>
    );
};
