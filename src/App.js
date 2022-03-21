import './App.css'
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
