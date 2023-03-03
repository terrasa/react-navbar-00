import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Fetch from './components/Fetch'
import { Home } from './components/Home'
import List from './components/List'
import Modal from './components/Modal'
import { Navbar } from './components/Navbar'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route exact path='/' element={<Home />} /> */}
        {/* <Route path='/modal' render={() => <Modal />} /> */}
        {/* <Route path='/fetch'>
          <Fetch />
        </Route> */}

        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='modal' element={<Modal />} />
          <Route path='fetch' element={<Fetch />} />
          <Route path='list' element={<List />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}
