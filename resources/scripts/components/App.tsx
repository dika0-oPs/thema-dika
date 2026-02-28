import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { store } from '@/state';
import DashboardRouter from '@/routers/DashboardRouter';
import AuthenticationRouter from '@/routers/AuthenticationRouter';
import ServerRouter from '@/routers/ServerRouter';
import HistoryRouter from '@/routers/HistoryRouter';
import NotFound from '@/components/elements/NotFound';
import { GlobalStyles } from '@/assets/GlobalStyles';
import styled from 'styled-components';

const MainAppWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow-x: hidden;
`;

const App = () => {
    return (
        <StoreProvider store={store}>
            <GlobalStyles />
            <MainAppWrapper>
                <Switch>
                    <Route path={'/auth'}>
                        <AuthenticationRouter />
                    </Route>
                    <Route path={'/server/:id'}>
                        <ServerRouter />
                    </Route>
                    <Route path={'/'}>
                        <DashboardRouter />
                    </Route>
                    <Route path={'*'}>
                        <NotFound />
                    </Route>
                </Switch>
            </MainAppWrapper>
        </StoreProvider>
    );
};

export default hot(App);
