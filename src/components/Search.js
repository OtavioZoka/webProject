import React, { useState } from 'react'

const InputStyle = {
  border: '2px solid #e23636',
  '&:focus-visible': {
    '.form-control': {
      outline: 'none',
    },
  },
}

const Search = ({ search }) => {
  const [text, setText] = useState('')

  const onSearch = (q) => {
    setText(q)
    search(q)
  }

  return (
    <section className="search">
      <form>
        <input
          style={InputStyle}
          type="text"
          className="form-control"
          placeholder="Pesquisar"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
    </section>
  )
}

export default Search
