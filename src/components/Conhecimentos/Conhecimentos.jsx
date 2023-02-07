import './Conhecimentos.css'
import HabiComp from './habiComp/HabiComp'
import HabiCompInvertio from './habiComp/HabiCompInvertido';
import expoxtoBranco from '../Image/exporBranco.png'//Aberto
//Fechado
 //IMAGENS
import html_logo from '../Image/HTML5.png'
import css_logo from '../Image/CSS3.png'
import js_logo from '../Image/JAVASCRIPT.png'//
import bs_logo from '../Image/BOOTSTRAP.png'
import react_logo from '../Image/React.png'
import Figma_logo from '../Image/Figma.png'

const html_img = html_logo

var html_text = "Ao contrario do que muitos pensam. HTML não é uma linguagem de programação, mas uma linguagem de marcação."
var css_text = "CSS é uma linguagem de estilização que é utilizada em sites."
var js_text = "JavaScript é uma linguagem de programação que surgiu em 1995, mas é utilizado até hoje por sua alta compatibilidade e facil aprendizagem. Apesar de ter surgido para o uso em navegadores, atualmente JavaScript é utilizado em aplicações mobiles (por FrameWorks como React Native) e back-End."
var bs_text = "Bootstrap é uma FrameWork pensada em Interface. Sua vantagem e o motivo de se tornar popular é seu foco em responsividade. Ou seja, o que funcionar bem em um Desktop também ira funcionar bem em um Mobile."
var react_text = "React é uma Biblioteca criada pelo Facebook em 2013. Seu objetivo é ajudar os desenvolvedores a produzirem interfaces de forma mais facil."
var react_native_text = "React native, também criada pelo FaceBook, possui foco no desenvolvimento mobile. Podendo ser usado para desenvolver aplicativos que rodem em Ios e Android ao mesmo tempo. ";
var figma_text = "Figma surgiu como uma alternativa a programas pagos."

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
                    <HabiComp 
                        nome={'HTML5'} 
                        descricao={html_text} 
                        vtg_TXT={''} 
                        desvantagens={''} 
                        capa={html_logo}
                        title_vantagens={''}
                        title_desvantagens={''}
                        />
                    <HabiCompInvertio 
                        nome={'CSS3'} 
                        descricao={css_text} 
                        capa={css_logo}
                        title_vantagens={''}
                        title_desvantagens={''}
                    />
                    <HabiComp 
                        nome={'JavaScript'} 
                        descricao={js_text} 
                        capa={js_logo}
                        title_vantagens={''}
                        title_desvantagens={''}
                        />
                </div>
            <div className='Header' id='FrameWorkHeader'>
                <p>FrameWorks</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporFW}/>
            </div>
                <div className='Header' id='FrameWork'>
                    <HabiComp nome={'Bootstrap'} 
                            descricao={bs_text} 
                            capa={bs_logo} 
                            vtg_TXT={'Responsividade'}
                            desvantagens={'Por ser uma frameWork muito popular. A pagina que usar pode acabar tendo um visual muito genérico.'}
                        />
                </div>
            <div className='Header' id='BibliotecasHeader'>
                <p>Bibliotecas</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporbiblioteca}/>
            </div>
                <div className='Header' id='Bibliotecas'>
                    <HabiComp 
                        nome={'React'} 
                        descricao={react_text} 
                        capa={react_logo}
                        vtg_TXT={'Uso de componentizações e hooks'}
                        desvantagens={'Pouca documentação oficial'}
                        
                    />
                    <HabiCompInvertio 
                        nome={'React Native'} 
                        descricao={react_native_text} 
                        capa={react_logo}
                        vtg_TXT={'Desenvolvimento de aplicativos com o uso de Javascript e multiplataforma'}
                        desvantagens={'Má otimização.'}
                    />
                </div>
            <div className='Header' id='ProtoHeader'>
                <p>Prototipagem</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporProto}/>
            </div>
                <div className='Header' id='Proto'>
                    <HabiComp nome={'Figma'} 
                                descricao={figma_text} 
                                capa={Figma_logo}
                                vtg_TXT={'Prototipos funcionais de forma fácil.'}
                                desvantagens={'Não é popular fora da área de desenvolvimento.'}
                        />
                </div>
            <div className='Header' id='LinguaHeader'>
                <p>Linguas</p>
                <img className='header_img' src={expoxtoBranco} onClick={exporLingua}/>
            </div>
                <div className='Header' id='Lingua'>
                    <HabiComp nome={'Português'} texto={html_text} capa={html_img} title_vantagens={''} title_desvantagens={''} DescriçãoHome={''}/>
                    <HabiCompInvertio nome={'Inglês'} texto={html_text} capa={html_img} title_vantagens={''} title_desvantagens={''} DescriçãoHome={''}/>
                    <HabiComp nome={'Espanhol'} texto={html_text} capa={html_img} title_vantagens={''} title_desvantagens={''} DescriçãoHome={''}/>
                    <HabiCompInvertio nome={'Francês'} texto={html_text} capa={html_img} title_vantagens={''} title_desvantagens={''} DescriçãoHome={''}/>
                </div>
            
        </div>
    )
}