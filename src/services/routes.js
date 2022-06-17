import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Hero from '../pages/Hero'
import About from '../pages/About'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact caseSensitive={false} />
      <Route component={Hero} path="/hero" caseSensitive={false} />
      <Route component={About} path="/about" caseSensitive={false} />
    </BrowserRouter>
  )
}

export default Routes
