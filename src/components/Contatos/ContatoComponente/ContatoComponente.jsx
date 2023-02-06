import './ContatoComponente.css'
import ButtonDef from '../../Button/ButtonDef'

function ContatoComponente(props){
    return(
        <div>
            <h2>{props.Rede}</h2>
            <img id='fotoRede' src={props.fotoRede} />
            <h3 id='h3'>{props.endereco}</h3>
            <ButtonDef logo={props.logo} texto = {props.txt} />
        </div>
    )
}

export default ContatoComponente