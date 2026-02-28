import React, { useEffect, useState } from 'react';
import { Server } from '@/api/server/getServer';
import getServers from '@/api/getServers';
import ServerRow from '@/components/dashboard/ServerRow';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import { PageContentBlock } from '@/components/elements/PageContentBlock';

const HeaderSection = styled.div`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: 4px;
    background: linear-gradient(to right, #ffffff, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const ServerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
`;

export default () => {
    const [ servers, setServers ] = useState<Server[]>([]);
    const user = useStoreState(state => state.user.data);

    useEffect(() => {
        getServers().then(setServers);
    }, []);

    return (
        <PageContentBlock title={'Dashboard'}>
            <HeaderSection>
                <Title>DIKA MARKET</Title>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>Welcome back, {user.username}</p>
            </HeaderSection>
            <ServerGrid>
                {servers.map(server => (
                    <ServerRow key={server.uuid} server={server} />
                ))}
            </ServerGrid>
        </PageContentBlock>
    );
};
