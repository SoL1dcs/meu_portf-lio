import './Contatos.css';
import ButtonDef from '../Button/ButtonDef'
import linkedinLogo from '../Image/linkedin.png'
import linkFoto from '../Image/linkedinFoto.jpeg'
import ContatoComponente from './ContatoComponente/ContatoComponente';

function Contatos(){
    return(
        <div>
            <div id="contato">
            <div className='conteiner' id='Linkedin'>
                <div>
                    <h2>LinkedIn</h2>
                    <h3>Erik Oliveira</h3>
                    <ButtonDef logo={linkedinLogo} texto = " Meu linkedin" />
                
                </div>
                <div>
                <   img className='fotoSocial' src={linkFoto} />
                </div>
            </div>
            <div className='conteiner' id='email'>
                <div>
                    <img className='fotoSocial' src={linkFoto} />
                </div>
                <div>
                    <h2>E-mail</h2>
                    <h3>erikoliveira818@gmail.com</h3>
                    <ButtonDef logo={linkedinLogo} texto = " Meu linkedin" />
                </div>
            </div>
            <div className='conteiner' id='insta'>
            <div>
                    <h2>Instagram</h2>
                    <h3>@erikoliveira818</h3>
                    <ButtonDef logo={linkedinLogo} texto = " Instagram" />
                
                </div>
                <div>
                <   img className='fotoSocial' src={linkFoto} />
                </div>
            </div>
            </div>
            <div id='contatoMobile'>
                <ContatoComponente id='linkedinMobile' Rede={'linkedin'} fotoRede={linkFoto} endereco={'Erik Oliveira'} logo={linkedinLogo} txt={'Linkedin'} />
                <div id='gmailMobile'>
                    <ContatoComponente Rede={'Gmail'} fotoRede={linkFoto} endereco={'erikoliveira818@gmail.com'} logo={linkedinLogo} txt={'Gmail'} />
                </div>
                <ContatoComponente id='instaMobile' Rede={'Instagram'} fotoRede={linkFoto} endereco={'@erikoliveira818@gmail.com'} logo={linkedinLogo} txt={'Instagram'} />
            </div>
        </div>
    )
}
export default Contatos