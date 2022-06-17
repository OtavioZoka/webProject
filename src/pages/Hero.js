import React, { useEffect, useState } from 'react'
import { resultBystring, resultAll } from '../services/api'
import TableHero from '../components/TableHero'
import Search from '../components/Search'

const Hero = () => {
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
      <header className="center">
        <h1>Personagens da Marvel</h1>
      </header>
      <Search search={(q) => setQuery(q)} />
      <TableHero items={items} isLoading={isLoading} />)
    </div>
  )
}

export default Hero
