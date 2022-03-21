import './Header.css'
import MainMenu from './Menu/MainMenu';

function Header(props) {
  return (
    <header className="header">
        <div className="logo">
          <img src="https://www.pngkey.com/png/detail/172-1726121_png-football-logos-picture-freeuse-football-logo-black.png" />
        </div>\
        <MainMenu/>
    </header>
  )
}

export default Header
