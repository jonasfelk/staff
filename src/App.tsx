import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import Home from './components/pages/Home/Home'
import SingleProduct from './components/pages/SingleProduct/SingleProduct'

import { ROUTES } from './utils/routes'
import SingleCategory from './components/pages/SingleCategory/SingleCategory'
import CartPage from './components/pages/CartPage/CartPage'

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
        <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
      </Route>
    </Routes>
  )
}
