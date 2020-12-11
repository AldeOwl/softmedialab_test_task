import React, { useState } from 'react';
import './App.scss';

import { Control } from './Components/Control';
import { Toggler } from './Components/Toggler';
import { Input } from './Components/Input';
import { InfoDesk } from './Components/InfoDesk';


const infoList = [
  {
    id: 'payInMonth',
    title: 'Оклад в месяц',
    valDescription: '',
    description: ''
  },
  {
    id: 'MROT',
    title: 'МРОТ',
    valDescription: '',
    description: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'
  },
  {
    id: 'payInDay',
    title: 'Оплата за день',
    valDescription: 'в день',
    description: ''
  },
  {
    id: 'payInHour',
    title: 'Оплата за час',
    valDescription: 'в час',
    description: ''
  },
]

export const App: React.FC = () => {
  const [id, setId] = useState('payInMonth');
  const [ndfl, setNdfl] = useState(true);
  const [inputValue, setValue] = useState('');


  return (
  <div className="App">
      <header className="App-header">
        <h1>Сумма</h1>
      </header>
      <Control 
        list={infoList}
        id={id}
        setId={setId}
      />
      <Toggler 
        titleOff='Указать с НДФЛ'
        titleOn='Без НДФЛ'
        status={ndfl} 
        setStatus={setNdfl}/>
      <Input 
        value={inputValue}
        handler={setValue}
        description={infoList[infoList.findIndex(item => item.id === id)].valDescription}
      />
      {id === 'payInMonth' && inputValue &&
      <InfoDesk 
        value={inputValue}
        ndfl={ndfl}
      />
      }
    </div>
  )};

