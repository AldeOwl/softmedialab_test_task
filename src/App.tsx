import React from 'react';
import './App.scss';

import { Control } from './Components/Control';
import { NdflControl } from './Components/NdflControl';


const infoList = [
  {
    id: 'payInMonth',
    title: 'Оклад в месяц'
  },
  {
    id: 'MROT',
    title: 'МРОТ'
  },
  {
    id: 'payInDay',
    title: 'Оплата за день'
  },
  {
    id: 'payInHour',
    title: 'Оплата за час'
  },
]

export const App: React.FC = () => (
  <div className="App">
      <header className="App-header">
        <h1>Сумма</h1>
      </header>
      <Control list={infoList}/>
      <NdflControl status={true}/>
    </div>
  );

