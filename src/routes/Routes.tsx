import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { Strategies } from '../pages/Strategies/Strategies';
import { StrategyForm } from '../pages/StrategyForm/StrategyForm';

export const PATH = {
  HOME: '/',
  STRATEGY_FORM: '/create-strategy/',
  STRATEGY_LIST: '/strategy-list/',
  ERROR_404: '/error404/',
};

export const RoutesComponent: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path={PATH.HOME} element={<Home />} />
    <Route path={PATH.STRATEGY_FORM} element={<StrategyForm />} />
    <Route path={PATH.STRATEGY_LIST} element={<Strategies />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
