import './NavBar.css'
import menu from '../Image/Menu.png'

function NavBar(){
    return(
        <div>
        <div id='container'>
            <p id='home'>SoL1d-</p>
            <div id='containerSon'>
                <p>Sobre Mim</p>
                <p>Conhecimentos</p>
                <p>Blog</p>
                <p>Currículo</p>
                <p>GitHub</p>
                <p>Contatos</p>
            </div>
        </div>
        <div id='containerMobilie'>
            <img id='menuBotao' src={menu}></img>
        </div>
        
    </div>
    )
}
export default NavBar