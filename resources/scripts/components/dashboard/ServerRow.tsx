import React from 'react';
import { Server } from '@/api/server/getServer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Cpu, HardDrive, Layout, Activity } from 'react-feather';

const StyledCard = styled(Link)`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 24px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.08);
        border-color: #6366f1;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    }
`;

const StatusDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 12px #10b981;
    margin-right: 8px;
`;

const ServerName = styled.h3`
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 15px 0 5px 0;
`;

const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 6px 12px;
    border-radius: 10px;
`;

export default ({ server }: { server: Server }) => {
    return (
        <StyledCard to={`/server/${server.id}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StatusDot />
                    <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>ONLINE</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>{server.identifier}</span>
            </div>

            <ServerName>{server.name}</ServerName>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginBottom: '20px' }}>Node: {server.node}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <StatItem>
                    <Activity size={14} />
                    {server.limits.cpu}%
                </StatItem>
                <StatItem>
                    <Layout size={14} />
                    {server.limits.memory}MB
                </StatItem>
                <StatItem>
                    <HardDrive size={14} />
                    {server.limits.disk / 1024}GB
                </StatItem>
            </div>
        </StyledCard>
    );
};
