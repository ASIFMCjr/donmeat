import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen, StartScreen, MainScreen } from '../../screens'

const RoutePages = () => {

  const isLogged = () => {
    const user = localStorage.getItem('user')
    if (user !== '') {
      return true
    }
  }

  return (
  <Router>
    <Routes>
      <Route path="/" element={isLogged ? <MainScreen/> : <StartScreen/>} />
      <Route path="login" element={<LoginScreen />} />
    </Routes>
    
  </Router>
  )
}
  
  export default RoutePages;