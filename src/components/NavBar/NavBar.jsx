import './NavBar.css'
import menu from '../Image/Menu.png'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function NavBar(){
    return(
        <div>
        <div id='container'>
            <p id='home'>SoL1d-</p>
            <div id='containerSon'>
                <Link to={'Sobre'}>Sobre Mim</Link>
                <Link to={'Conhecimentos'}>Conhecimentos</Link>
                <Link to={'Blog'}>Blog</Link>
                <Link to={'Curriculo'}>Currículo</Link>
                <Link to={'gitHub'}>GitHub</Link>
                <Link to={'contatos'}>Contatos</Link>
            </div>
        </div>
        <div id='containerMobilie'>
            <img id='menuBotao' src={menu}></img>
        </div>
        <Outlet />
    </div>
    )
}
export default NavBar