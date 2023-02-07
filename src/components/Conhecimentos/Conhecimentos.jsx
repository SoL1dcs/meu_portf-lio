import './Conhecimentos.css'
import HabiComp from './habiComp/HabiComp'
import HabiCompInvertio from './habiComp/HabiCompInvertido';
import expoxtoBranco from '../Image/exporBranco.png'//Aberto
//Fechado

var html_text = "HTML É UMA LINGUAGEM DE MARCAÇÃO./n Assim sendo."
const html_img = "https://via.placeholder.com/150";

var webDev_none = false;
var fw = false;
var biblioteca = false;
var proto = false;
var lingua = false;

function exporWebDev(){
    if (webDev_none === false){
        var webdev_var = document.getElementById('webDev')
        webdev_var.style.display="block"
        webDev_none = true;
    }else{
        var webdev_var = document.getElementById('webDev')
        webdev_var.style.display="none"
        webDev_none = false;
    }
    
}

function exporFW(){
    if (fw === false){
        var webdev_var = document.getElementById('FrameWork')
        webdev_var.style.display="block"
        fw = true;
    }else{
        var webdev_var = document.getElementById('FrameWork')
        webdev_var.style.display="none"
        fw = false;
    }
    
}
function exporbiblioteca(){
    if (biblioteca === false){
        var webdev_var = document.getElementById('Bibliotecas')
        webdev_var.style.display="block"
        biblioteca = true;
    }else{
        var webdev_var = document.getElementById('Bibliotecas')
        webdev_var.style.display="none"
        biblioteca = false;
    }
    
}
function exporProto(){
    if (proto === false){
        var webdev_var = document.getElementById('Proto')
        webdev_var.style.display="block"
        proto = true;
    }else{
        var webdev_var = document.getElementById('Proto')
        webdev_var.style.display="none"
        proto = false;
    }
    
}
function exporLingua(){
    if (lingua === false){
        var webdev_var = document.getElementById('Lingua')
        webdev_var.style.display="block"
        lingua = true;
    }else{
        var webdev_var = document.getElementById('Lingua')
        webdev_var.style.display="none"
        lingua = false;
    }
    
}


export default function Conhecimentos(){
    return(
        <div>
            <div className='Header' id='webDevHeader' >
                <p>Desenvolvimento Web</p>
                <img className='header_img' src={expoxtoBranco}onClick={exporWebDev}/>
            </div>
                <div id='webDev'>
                    <HabiComp nome={'HTML5'} texto={html_text} capa={html_img}/>
                    <HabiCompInvertio nome={'CSS3'} texto={html_text} capa={html_img}/>
                    <HabiComp nome={'JavaScript'} texto={html_text} capa={html_img}/>
                </div>
            <div className='Header' id='FrameWorkHeader'>
                <p>FrameWorks</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporFW}/>
            </div>
                <div className='Header' id='FrameWork'>
                    <HabiComp nome={'Bootstrap'} texto={html_text} capa={html_img}/>
                </div>
            <div className='Header' id='BibliotecasHeader'>
                <p>Bibliotecas</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporbiblioteca}/>
            </div>
                <div className='Header' id='Bibliotecas'>
                    <HabiComp nome={'React'} texto={html_text} capa={html_img}/>
                    <HabiCompInvertio nome={'React Native'} texto={html_text} capa={html_img}/>
                </div>
            <div className='Header' id='ProtoHeader'>
                <p>Prototipagem</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporProto}/>
            </div>
                <div className='Header' id='Proto'>
                    <HabiComp nome={'Figma'} texto={html_text} capa={html_img}/>
                </div>
            <div className='Header' id='LinguaHeader'>
                <p>Linguas</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporLingua}/>
            </div>
                <div className='Header' id='Lingua'>
                    <HabiComp nome={'Português'} texto={html_text} capa={html_img}/>
                    <HabiCompInvertio nome={'Inglês'} texto={html_text} capa={html_img}/>
                    <HabiComp nome={'Espanhol'} texto={html_text} capa={html_img}/>
                    <HabiCompInvertio nome={'Francês'} texto={html_text} capa={html_img}/>
                </div>
            
        </div>
    )
}