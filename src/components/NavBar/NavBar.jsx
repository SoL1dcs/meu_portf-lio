import './NavBar.css'
import menu from '../Image/Menu.png'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function NavBar(){
    return(
        <div>
        <div id='container'>
            <div>
                <p id='home'>SoL1d-</p>
            </div>
            <div id='containerSon'>
                <Link to={'Sobre'}><p>Sobre Mim</p></Link>
                <Link to={'Conhecimentos'}><p>Conhecimentos</p></Link>
                <Link to={'Blog'}><p>Blog</p></Link>
                <Link to={'Curriculo'}><p>Currículo</p></Link>
                <Link to={'gitHub'}><p>GitHub</p></Link>
                <Link to={'contatos'}><p>Contatos</p></Link>
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

/*
<p id='home'>SoL1d-</p>
    <div id='containerSon'>
        <Link to={'Sobre'}><p>Sobre Mim</p></Link>
        <Link to={'Conhecimentos'}><p>Conhecimentos</p></Link>
        <Link to={'Blog'}><p>Blog</p></Link>
        <Link to={'Curriculo'}><p>Currículo</p></Link>
        <Link to={'gitHub'}><p>GitHub</p></Link>
        <Link to={'contatos'}><p>Contatos</p></Link>
    </div>
*/