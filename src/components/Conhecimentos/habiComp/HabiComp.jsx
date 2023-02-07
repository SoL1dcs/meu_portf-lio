import './HabiComp.css'

function HabiComp(props){
    return(
            <div className='habDiv'>
                <div>
                    <h1>{props.nome}</h1>
                    <p>{props.texto}</p>
                </div>
                <div>
                    <img src={props.capa} />
                </div>
            </div>
    )
}

export default HabiComp