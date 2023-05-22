import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../../components'

const MainLayout: FC = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <Header />
        </header>
        <main className='content'>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
