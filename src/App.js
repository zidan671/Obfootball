import './App.css'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Tournaments from './components/Tournaments/Tournaments'
import Statistics from './components/Statistics/Statistics'
import Galery from './components/Galery/Galery'
import Contacts from './components/Contacts/Constacts';
import Teams from './components/Teams/Teams'

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/tournaments" element={<Tournaments tournamentsPage ={props.state.tournamentsPage}/>} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
