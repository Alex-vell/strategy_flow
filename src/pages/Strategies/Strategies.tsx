import React, { FC, useEffect } from 'react';

import { NavLink, Navigate } from 'react-router-dom';

import { IStrategy } from '../../api/strategy-api';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import { setAppErrorAC } from '../../store/AppSlice';
import { fetchStrategies } from '../../store/meddleware/strategyMiddleware';
import { setSelectedStrategyAC } from '../../store/StrategiesSlice';

import style from './Strategies.module.scss';

export const Strategies: FC = () => {
  const dispatch = useAppDispatch();

  const strategies = useAppSelector(state => state.strategyReducer.strategies);
  const selectedStrategy = useAppSelector(
    state => state.strategyReducer.selectedStrategy,
  );

  useEffect(() => {
    dispatch(fetchStrategies());
    return () => {
      dispatch(setAppErrorAC({ error: null }));
    };
  }, []);

  const selectStrategy = (strategy: IStrategy | null): void => {
    dispatch(setSelectedStrategyAC(strategy));
  };

  if (selectedStrategy) {
    return <Navigate to={PATH.STRATEGY_FORM} />;
  }

  return (
    <div className={style.strategyPage}>
      <div className={style.backBtnWrap}>
        <NavLink to={PATH.STRATEGY_FORM} className={style.backBtn}>
          Back
        </NavLink>
      </div>
      <div className={style.titleWrap}>
        <h1 className={style.title}>Select a strategy</h1>
      </div>
      <div className={style.strategyList}>
        {strategies.strategies?.map(item => (
          <div
            role="presentation"
            key={item.id}
            className={style.strategyItem}
            onClick={() => {
              selectStrategy({
                id: item.id,
                name: item.name,
                start_capital: item.start_capital,
                start_date: item.start_date,
                end_date: item.end_date,
              });
            }}
          >
            <p className={style.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
