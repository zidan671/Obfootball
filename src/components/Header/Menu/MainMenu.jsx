import { NavLink, Link } from 'react-router-dom'
import './MainMenu.css'

function MainMenu(props) {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu_item">Главная</NavLink>
      <NavLink to="/tournaments" className="menu_item">Турниры</NavLink>
      <NavLink to="/statistics" className="menu_item">Статистика</NavLink>
      <NavLink to="/teams" className="menu_item">Команды</NavLink>
      <NavLink to="/galery" className="menu_item">Галерея</NavLink>
      <NavLink to="/contacts" className="menu_item">Контакты</NavLink>
    </nav>
  )
}

export default MainMenu
