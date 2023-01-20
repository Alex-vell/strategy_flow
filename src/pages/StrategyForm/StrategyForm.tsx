import React, { FC, useEffect, useMemo } from 'react';
import './StrategyForm.scss';

import { DatePicker, Input, Space } from 'antd';
import dayjs from 'dayjs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { IStrategy } from '../../api/strategy-api';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import { addStrategyTC } from '../../store/meddleware/strategyMiddleware';
import {
  setIsCreatedStrategyAC,
  setSelectedStrategyAC,
} from '../../store/slice/Strategies/StrategiesSlice';

export const StrategyForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectedStrategy = useAppSelector(
    state => state.strategyReducer.selectedStrategy,
  );

  const defaultStrategyData =
    selectedStrategy &&
    ({
      id: selectedStrategy.id,
      name: selectedStrategy.name,
      start_capital: selectedStrategy.start_capital,
      start_date: dayjs(selectedStrategy.start_date).format('YYYY-MM-DD'),
      end_date: dayjs(selectedStrategy.end_date).format('YYYY-MM-DD'),
    } as IStrategy);

  const { handleSubmit, control, reset } = useForm<IStrategy>({
    // eslint-disable-next-line consistent-return
    defaultValues: useMemo(() => {
      if (defaultStrategyData) {
        return defaultStrategyData;
      }
    }, [defaultStrategyData]),
  });

  useEffect(() => {
    if (defaultStrategyData) {
      reset(defaultStrategyData);
    }
  }, [selectedStrategy]);

  const onSubmit: SubmitHandler<IStrategy> = data => {
    const newData = {
      id: new Date().getTime().toString(),
      name: data.name,
      start_capital: data.start_capital,
      start_date: dayjs(data.start_date).format('YYYY-MM-DD'),
      end_date: dayjs(data.end_date).format('YYYY-MM-DD'),
    };
    dispatch(addStrategyTC(newData));
    dispatch(setIsCreatedStrategyAC({ status: true }));
    navigate(PATH.HOME);
  };

  const clearSelectedStrategy = (): void => {
    dispatch(setSelectedStrategyAC(null));
  };

  return (
    <section className="root__login">
      <form className="root__login__login-form" onSubmit={handleSubmit(onSubmit)}>
        <NavLink to={PATH.HOME} className="root__login__login-form__back-btn">
          Back
        </NavLink>
        <div className="root__login__login-form__fields-block">
          <h1 className="root__login__login-form__fields-block__title">
            Create a strategy
          </h1>

          <p className="root__login__login-form__fields-block__text">
            Fact: Interest rate on blanc cash deposits will never beat inflation
          </p>

          <span className="root__login__login-form__fields-block__label-btn">
            Select a strategy
          </span>
          <NavLink
            className="root__login__login-form__fields-block__btn-wrap"
            to={PATH.STRATEGY_LIST}
            onClick={clearSelectedStrategy}
          >
            Add a strategy
          </NavLink>

          <div className="root__login__login-form__fields-block__field-wrap">
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="name" className="label">
                  Strategy Name
                  <Input
                    id="name"
                    className="field"
                    required
                    onChange={onChange}
                    defaultValue={selectedStrategy?.name && selectedStrategy.name}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                  />
                </label>
              )}
            />
          </div>

          <div className="root__login__login-form__fields-block__field-wrap">
            <Controller
              control={control}
              name="start_capital"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="start_capital" className="label">
                  Starting Capital
                  <Input
                    id="start_capital"
                    className="field"
                    required
                    onChange={onChange}
                    defaultValue={
                      selectedStrategy?.start_capital && selectedStrategy.start_capital
                    }
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                  />
                </label>
              )}
            />
          </div>

          <div className="root__login__login-form__fields-block__field-wrap range">
            <Controller
              control={control}
              name="start_date"
              render={({ field: { onChange, onBlur } }) => (
                <label htmlFor="start_date" className="label">
                  Select a date range
                  <Space direction="vertical" className="start-date-picker">
                    <DatePicker
                      onBlur={onBlur}
                      defaultValue={
                        selectedStrategy?.start_date
                          ? dayjs(selectedStrategy.start_date)
                          : undefined
                      }
                      onChange={onChange}
                    />
                  </Space>
                </label>
              )}
            />

            <Controller
              control={control}
              name="end_date"
              render={({ field: { onChange, onBlur } }) => (
                <Space direction="vertical" className="end-date-picker">
                  <DatePicker
                    onBlur={onBlur}
                    onChange={onChange}
                    defaultValue={
                      selectedStrategy?.start_date
                        ? dayjs(selectedStrategy.start_date)
                        : undefined
                    }
                  />
                </Space>
              )}
            />
          </div>
        </div>

        <div className="root__login__login-form__btn-wrap">
          <input className="btn-submit" type="submit" value="Create strategy" />
        </div>
      </form>
    </section>
  );
};
