import './App.css'
import { useState } from 'react'
import SigninForm from './Components/forms/Signin-form'
import SignupForm from './Components/forms/Signup-form'
import ShopPage from './Components/pages/ShopPage'

function App() {
  const [form, setForm] = useState('login') // initially login form hoga

  return (
    // // nomal conditional rendering
    // form === 'login' ? (
    //   <SigninForm onNavigate={setForm} />
    // ) : (
    //   <SignupForm onNavigate={setForm} />
    // )
    <ShopPage/>
  )
}

export default App
