import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Join from './pages/Join.jsx'
import Login from './pages/Login.jsx'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  )
}

export default App