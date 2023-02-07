import './HabiComp.css'

function HabiComp(props){   

    return(
            <div className='habDiv'>
                <div style={{margin: '0 15%'}}>
                    <h1 className='nomeLin'>{props.nome}</h1>
                    <p className='desc_Tittle'>{props.DescriçãoHome}</p>
                    <p className='desc_text'>&nbsp;{props.descricao}</p>
                        <p>{props.title_vantagens}</p>
                        <p>{props.vtg_TXT}</p>
                        <p>{props.title_desvantagens}</p>
                        <p>{props.desvantagens}</p>
                </div>
                <div>
                    <img src={props.capa} />
                </div>
            </div>
    )
}

HabiComp.defaultProps = {
    nome: '',
    DescriçãoHome:'Descrição',
    descricao: '',
    vtg_TXT: '',
    desvantagens: '',
    capa: '',
    title_vantagens: 'Vantagens',
    title_desvantagens:'Desvantagens',
}

export default HabiComp