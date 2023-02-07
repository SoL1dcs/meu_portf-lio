import './ButtonDef.css'

function ButtonDef(props){
    return(
        <>
            <a href="https://github.com/SoL1dcs"><button class="button-23" role="button" ><img id='fotoLogo' src={props.logo}/>{props.texto} </button></a>
        </>
    )
}
export default ButtonDef