import './App.css';
import Header from './components/Header';
import CharacterTable from './components/CharacterTable';
import React, { useEffect, useState } from 'react';
import Search from './components/Search';

import { resultBystring, resultAll } from './services/api';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await resultAll();
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      } else {
        const result = await resultBystring(query);
        console.log('aqui', result);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
