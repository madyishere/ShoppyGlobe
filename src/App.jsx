import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import appStore from './assets/utils/appStore'

function App() {
  

  return (
    <Provider store={appStore}>
      <Header/>
      <Outlet />
    </Provider>
  )
}
export default App
