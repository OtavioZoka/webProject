import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TableCharacter from './components/TableCharacter'
import Search from './components/Search'
import { resultBystring, resultAll } from './services/api'
import './App.css'

function App() {
  const [isLoading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await resultAll()
        setItems(result.data.data.results)
        setLoading(false)
      } else {
        const result = await resultBystring(query)
        setItems(result.data.data.results)
        setLoading(false)
      }
    }
    fetch()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <TableCharacter items={items} isLoading={isLoading} />
    </div>
  )
}

export default App
