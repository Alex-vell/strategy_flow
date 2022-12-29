import React, { FC } from 'react';
import './StrategyForm.scss';

import { Input } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IStrategy } from '../../api/strategy-api';
import { useAppDispatch } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import { addStrategyTC } from '../../store/meddleware/strategyMiddleware';

export const StrategyForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<IStrategy>();
  const onSubmit: SubmitHandler<IStrategy> = data => {
    const newData = {
      id: new Date().getTime().toString(),
      name: data.name,
      description: data.description,
    };
    dispatch(addStrategyTC(newData));
    navigate(PATH.HOME);
  };

  return (
    <section className="root__login">
      <form className="root__login__login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="root__login__login-form__fields-block">
          <div className="root__login__login-form__fields-block__field-wrap">
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="API" className="label">
                  Name
                  <Input
                    id="API"
                    className="field"
                    required
                    onChange={onChange}
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
              name="description"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="description" className="label">
                  Description
                  <Input
                    id="description"
                    className="field"
                    required
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                  />
                </label>
              )}
            />
          </div>
        </div>

        <div className="root__login__login-form__btn-wrap">
          <input className="btn-submit" type="submit" value="Create" />
        </div>
      </form>
    </section>
  );
};
