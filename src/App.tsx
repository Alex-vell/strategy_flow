import React, { FC } from 'react';

import './App.module.scss';
import { Header } from './components/Header/Header';
import { RoutesComponent } from './routes/Routes';

const App: FC = () => (
  <div className="App">
    <Header />
    <RoutesComponent />
  </div>
);

export default App;
