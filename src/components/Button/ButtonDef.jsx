import './ButtonDef.css'

function ButtonDef(props){
    return(
        <>
            <button class="button-23" role="button"><img id='fotoLogo' src={props.logo}/>{props.texto}</button>
        </>
    )
}
export default ButtonDef