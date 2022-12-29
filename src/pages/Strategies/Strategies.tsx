import React, { FC, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import addStrategySVG from '../../assets/img/plus-solid.svg';
import removeStrategySVG from '../../assets/img/trash-can-solid.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import {
  fetchStrategies,
  removeStrategyTC,
} from '../../store/meddleware/strategyMiddleware';

import style from './Strategies.module.scss';

export const Strategies: FC = () => {
  const dispatch = useAppDispatch();

  const strategies = useAppSelector(state => state.strategyReducer.strategies);

  useEffect(() => {
    dispatch(fetchStrategies());
  }, []);

  const removeStrategy = (strategy: string): void => {
    dispatch(removeStrategyTC(strategy));
  };

  return (
    <div className={style.strategyPage}>
      <div className={style.strategyList}>
        <NavLink className={style.addStrategyBtn} to={PATH.STRATEGY_FORM}>
          <img src={addStrategySVG} alt="create strategy" />
          Create strategy
        </NavLink>

        {strategies?.strategies?.map(item => (
          <div key={item.id} className={style.strategyItem}>
            <h3 className={style.title}>{item.name}</h3>
            <div className={style.block}>
              <div className={style.content}>
                <div>
                  <span className={style.field}>Description:</span>
                  {item.description}
                </div>
              </div>
              <div
                role="presentation"
                className={style.imgWrap}
                onClick={() => {
                  removeStrategy(item.id);
                }}
              >
                <img
                  className={style.img}
                  src={removeStrategySVG}
                  alt="remove strategy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
