import './Curriculo.css'
import CurriculoImg from '../Image/Curriculo.png';


function Curriculo(){
    return(
        <div id='cont'>
            <div>
                <img id='fotoCurriculo' src={CurriculoImg} />
            </div>
            <div>
                <a href={CurriculoImg} id='curriculoDownload'>Download</a>
            </div>
        </div>
    )
}

export default Curriculo