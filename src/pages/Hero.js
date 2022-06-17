import React, { useEffect, useState } from 'react'
import { resultBystring, resultAll } from '../services/api'
import Header from '../components/Header'
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
    <>
      <Header />
      <header className="center">
        <h2>Hero</h2>
      </header>
      <Search search={q => setQuery(q)} />
      <TableHero items={items} isLoading={isLoading} />)
    </>
  )
}

export default Hero
