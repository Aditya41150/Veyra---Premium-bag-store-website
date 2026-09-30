import './App.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import SigninForm from './Components/forms/Signin-form'
import SignupForm from './Components/forms/Signup-form'
import ShopPage from './Components/pages/ShopPage'
import Cart from './Components/pages/Cart'
import Orders from './Components/pages/Orders'
import MyAccount from './Components/pages/myAccount'
import Navbar from './Components/Navbar'

function ShopLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function SigninPage() {
  const navigate = useNavigate()

  return (
    <SigninForm
      onNavigate={() => navigate('/signup')}
      onSuccess={() => navigate('/shop', { replace: true })}
    />
  )
}

function SignupPage() {
  const navigate = useNavigate()

  return (
    <SignupForm
      onNavigate={() => navigate('/signin')}
      onSuccess={() => navigate('/shop', { replace: true })}
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<ShopLayout />}>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
