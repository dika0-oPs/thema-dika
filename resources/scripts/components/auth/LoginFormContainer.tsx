import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('https://i.ibb.co.com/fdyCcG4K/6674bee4254f31a82db367db2c89ed0f.jpg') no-repeat center center fixed;
    background-size: cover;
`;

const GlassCard = styled.div`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem;
    border-radius: 30px;
    width: 100%;
    max-width: 450px;
    text-align: center;
`;

export default () => (
    <LoginWrapper>
        <GlassCard>
            <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 900, letter-spacing: '5px' }}>DIKA MARKET</h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>Exclusive Hosting Panel</p>
            <LoginForm />
        </GlassCard>
    </LoginWrapper>
);
