import React from 'react';
import { ServerContext } from '@/state/server';
import Console from '@/components/server/Console';
import StatGraphs from '@/components/server/StatGraphs';
import styled from 'styled-components';
import ServerDetailsBlock from '@/components/server/ServerDetailsBlock';

const ConsoleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;

    & .console-box {
        grid-column: span 2;
        background: rgba(0, 0, 0, 0.3) !important;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        overflow: hidden;
    }

    & .stats-box {
        grid-column: span 1;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export default () => {
    const name = ServerContext.useStoreState(state => state.server.data?.name);

    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>{name}</h1>
                <p style={{ color: 'rgba(255,255,255,0.4)' }}>Monitoring server status at Dika Market</p>
            </div>

            <ServerDetailsBlock />

            <ConsoleWrapper>
                <div className={'console-box'}>
                    <Console />
                </div>
                <div className={'stats-box'}>
                    <StatGraphs />
                </div>
            </ConsoleWrapper>
        </div>
    );
};
          
