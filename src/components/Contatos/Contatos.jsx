import './Contatos.css';
import ButtonDef from '../Button/ButtonDef'
import linkedinLogo from '../Image/linkedin.png'
import linkFoto from '../Image/linkedinFoto.jpeg'
import ContatoComponente from './ContatoComponente/ContatoComponente';
import Gmail from '../Image/gmail.png'
import Instagram from '../Image/instagram.png'

function Contatos(){
    return(
        <div  id='contatosContainer'>
            <div style={{border:'0px solid blue',borderRadius:'25px'}}>
                <p style={{color:'#0D8BD9'}} className='nomeRede'>LinkedIn</p>
                <img className='fotoContato' src={linkedinLogo} />
                <p className='nickRede'>Erik Oliveira</p>
                <a href="https://www.linkedin.com/in/erikoliveira28/" style={{backgroundColor:'#0D8BD9'}}>
                    Linkedin
                </a>
            </div>
            <div style={{border:'0px solid red',borderRadius:'25px'}}>
                <p style={{color:'#c71610'}} className='nomeRede'>E-mail</p>
                <img className='fotoContato' src={Gmail} />
                <p className='nickRede'>erikoliveira818@gmail.com</p>
                <a href="mailto: erikoliveira818@gmail.com" style={{backgroundColor:'#c71610'}}>
                    Email
                </a>
            </div>
            <div style={{border:'0px solid pink',borderRadius:'25px'}}>
                <p style={{color:'#C13584'}} className='nomeRede'>Instagram</p>
                <img className='fotoContato' src={Instagram} />
                <p className='nickRede'>@erikoliveira818</p>
                <a href='https://instagram.com/erikoliveira818' style={{backgroundColor:'#C13584'}}>
                    Instagram     
                </a>
            </div>
        </div>
    )
}
export default Contatos