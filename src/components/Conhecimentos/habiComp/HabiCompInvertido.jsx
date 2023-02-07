import './HabiComp.css'

function HabiCompInvertio(props){
    return(
            <div className='habDiv2'>
                <div>
                    <img src={props.capa} />
                </div>
                <div>
                    <h1>{props.nome}</h1>
                    <p>{props.texto}</p>
                </div>
            </div>
    )
}

export default HabiCompInvertio