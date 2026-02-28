import React, { useEffect, useState } from 'react';
import { Server } from '@/api/server/getServer';
import getServers from '@/api/getServers';
import ServerRow from '@/components/dashboard/ServerRow';
import Pagination from '@/components/elements/Pagination';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import { PageContentBlock } from '@/components/elements/PageContentBlock';
import { useFlashMessages } from '@/plugins/useFlashMessages';

const Container = styled.div`
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const HeaderSection = styled.div`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Branding = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 4px;
    background: linear-gradient(to right, #ffffff, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
    color: rgba(255, 255, 255, 0.5);
    margin: 5px 0 0 0;
    font-size: 0.9rem;
    font-weight: 500;
`;

const ServerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
`;

export default () => {
    const { addError, clearFlashes } = useFlashMessages();
    const [ servers, setServers ] = useState<Server[]>([]);
    const [ loading, setLoading ] = useState(true);
    const user = useStoreState(state => state.user.data);

    useEffect(() => {
        clearFlashes();
        getServers()
            .then(data => setServers(data))
            .catch(error => addError({ key: 'dashboard', message: error.message }))
            .finally(() => setLoading(false));
    }, []);

    return (
        <PageContentBlock title={'Dashboard'}>
            <Container>
                <HeaderSection>
                    <Branding>
                        <Title>DIKA MARKET</Title>
                        <Subtitle>Welcome back, {user.username}. Manage your services easily.</Subtitle>
                    </Branding>
                </HeaderSection>

                <ServerGrid>
                    {!loading && servers.map(server => (
                        <ServerRow key={server.uuid} server={server} />
                    ))}
                </ServerGrid>

                {loading && <p style={{ textAlign: 'center', color: '#fff' }}>Loading services...</p>}
            </Container>
        </PageContentBlock>
    );
};
