import React, { FC, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import addStrategySVG from '../../assets/img/plus-solid.svg';
import removeStrategySVG from '../../assets/img/trash-can-solid.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import {
  fetchPublicAPI,
  removeStrategyTC,
} from '../../store/meddleware/layoutMiddleware';

import style from './Strategies.module.scss';

export const Strategies: FC = () => {
  const dispatch = useAppDispatch();

  const entries = useAppSelector(state => state.publicApiReducer.entries);

  useEffect(() => {
    dispatch(fetchPublicAPI());
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

        {entries?.entries?.map(item => (
          <div key={item.Link} className={style.strategyItem}>
            <h3 className={style.title}>{item.API}</h3>
            <div className={style.block}>
              <div className={style.content}>
                <div>
                  <span className={style.field}>Category:</span> {item.Category}
                </div>
                <div>
                  <span className={style.field}>Link:</span>
                  {item.Link}
                </div>
                <div>
                  <span className={style.field}>Description:</span>
                  {item.Description}
                </div>
              </div>
              <div
                role="presentation"
                className={style.imgWrap}
                onClick={() => {
                  removeStrategy(item.API);
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
