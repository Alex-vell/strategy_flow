import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../pages/NotFound/NotFound';
import { Strategies } from '../pages/Strategies/Strategies';
import { StrategyForm } from '../pages/StrategyForm/StrategyForm';

export const PATH = {
  HOME: '/',
  STRATEGY_FORM: '/create-strategy/',
  ERROR_404: '/error404/',
};

export const RoutesComponent: FC = () => (
  <Routes>
    <Route path="/" element={<Strategies />} />
    <Route path={PATH.HOME} element={<Strategies />} />
    <Route path={PATH.STRATEGY_FORM} element={<StrategyForm />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
