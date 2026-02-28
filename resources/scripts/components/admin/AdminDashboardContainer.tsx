import React from 'react';
import styled from 'styled-components';
import { PageContentBlock } from '@/components/elements/PageContentBlock';

const AdminWrapper = styled.div`
    padding: 2.5rem;
    max-width: 1400px;
    margin: 0 auto;
`;

const AdminHeader = styled.div`
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 3rem;
    border-left: 6px solid #6366f1;
`;

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
`;

const StatCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.06);
    }
`;

export default () => {
    return (
        <PageContentBlock title={'Admin Dashboard'}>
            <AdminWrapper>
                <AdminHeader>
                    <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>ADMIN CONTROL</h1>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '10px', fontSize: '1.1rem' }}>
                        Welcome to DIKA MARKET internal management system.
                    </p>
                </AdminHeader>

                <StatGrid>
                    <StatCard>
                        <h4 style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.8rem', textTransform: 'uppercase' }}>Total Servers</h4>
                        <p style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, margin: '10px 0 0 0' }}>Active</p>
                    </StatCard>
                    <StatCard>
                        <h4 style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.8rem', textTransform: 'uppercase' }}>System Status</h4>
                        <p style={{ color: '#10b981', fontSize: '2rem', fontWeight: 800, margin: '10px 0 0 0' }}>Healthy</p>
                    </StatCard>
                </StatGrid>
            </AdminWrapper>
        </PageContentBlock>
    );
};
