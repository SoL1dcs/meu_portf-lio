import './GitHub.css';
import ButtonDef from '../Button/ButtonDef'
import GitHubLogo from '../Image/GitHub.png'

function GitHub (){
    return(
        <div id='gitDiv'>
            <p id='meuGitHub'>Meu GitHub</p>
            <img id='gitFoto' src='https://avatars.githubusercontent.com/u/94372570?s=400&u=806d0e4c4145d72d203def471d3becf41f5123de&v=4'></img>
            <p style={{fontSize:'1.7vw',color:'#D3D3D3'}}>Erik Oliveira</p>
            <p style={{fontSize:'1vw',color:' #A9A9A9'}}>Sol1dcs</p>
            <ButtonDef  logo={GitHubLogo} texto={'Meu GitHub'} />
        </div>
    )
}
export default GitHub