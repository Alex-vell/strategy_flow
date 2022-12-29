import React, { FC } from 'react';

import './NotFound.scss';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../routes/Routes';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  const onClickHandler = (): void => {
    navigate(PATH.HOME);
  };
  return (
    <section className="not-found">
      <div className="impressum__wrap">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist"
          extra={
            <Button onClick={onClickHandler} type="primary">
              Startseite
            </Button>
          }
        />
      </div>
    </section>
  );
};
