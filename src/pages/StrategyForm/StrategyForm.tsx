import React, { FC } from 'react';
import './StrategyForm.scss';

import { Input } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IEntryItem } from '../../api/public-api';
import { useAppDispatch } from '../../hooks/redux';
import { PATH } from '../../routes/Routes';
import { addStrategyTC } from '../../store/meddleware/layoutMiddleware';

export const StrategyForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<IEntryItem>();
  const onSubmit: SubmitHandler<IEntryItem> = data => {
    dispatch(addStrategyTC(data));
    navigate(PATH.HOME);
  };

  return (
    <section className="root__login">
      <form className="root__login__login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="root__login__login-form__fields-block">
          <div className="root__login__login-form__fields-block__field-wrap">
            <Controller
              control={control}
              name="API"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="API" className="label">
                  API
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
              name="Auth"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="Auth" className="label">
                  Auth
                  <Input
                    id="Auth"
                    required
                    className="field"
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
              name="Category"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="Category" className="label">
                  Category
                  <Input
                    id="Category"
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
              name="Description"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="Description" className="label">
                  Description
                  <Input
                    id="Category"
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
              name="Link"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <label htmlFor="Link" className="label">
                  Link
                  <Input
                    id="Link"
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
