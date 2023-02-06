import './Curriculo.css'
import CurriculoImg from '../Image/Curriculo.png';

function Curriculo(){
    return(
        <div id='cont'>
            <div>
                <h3>Baixe meu currículo abaixo</h3>
                <button id='downloadDesk'>Download</button>
            </div>
            <div>
                <img id='fotoCurriculo' src={CurriculoImg} />
            </div>
        </div>
    )
}

export default Curriculo