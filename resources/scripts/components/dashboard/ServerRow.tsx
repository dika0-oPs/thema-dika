import React from 'react';
import { Server } from '@/api/server/getServer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled(Link)`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 24px;
    text-decoration: none;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.08);
        border-color: #6366f1;
    }
`;

export default ({ server }: { server: Server }) => {
    return (
        <StyledCard to={`/server/${server.id}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>{server.identifier}</span>
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, margin: '0' }}>{server.name}</h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Node: {server.node}</p>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <span style={{ background: 'rgba(0,0,0,0.2)', padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem' }}>{server.limits.memory}MB</span>
                <span style={{ background: 'rgba(0,0,0,0.2)', padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem' }}>{server.limits.cpu}% CPU</span>
            </div>
        </StyledCard>
    );
};
