import './MainMenu.css'
import Tournaments from './Tournaments/Tournaments';
import Statistics from './Statistics/Statistics';
import Players from './Players/Players';
import Galery from './Galery/Galery';
import Contacts from './Contacts/Constacts';

function MainMenu(props) {
  return (
    <nav className="menu">
      <Tournaments/>
      <Statistics/>
      <Players/>
      <Galery/>
      <Contacts/>
    </nav>
  )
}

export default MainMenu
