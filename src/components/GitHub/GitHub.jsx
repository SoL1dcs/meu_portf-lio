import './GitHub.css';
import ButtonDef from '../Button/ButtonDef'
import GitHubLogo from '../Image/GitHub.png'

function GitHub (){
    return(
        <div id='gitDiv'>
            <p id='meuGitHub'>Meu GitHub</p>
            <img id='gitFoto' src='https://avatars.githubusercontent.com/u/94372570?s=400&u=806d0e4c4145d72d203def471d3becf41f5123de&v=4'></img>
            <p style={{fontSize:'1.7vw'}}>Erik Oliveira</p>
            <p style={{fontSize:'1vw'}}>Sol1dcs</p>
            <ButtonDef logo={GitHubLogo} texto={'Meu GitHub'} />
        </div>
        
    )
}
export default GitHub

/*
<h1>Meu GitHub</h1>
            <div id='gitConteiner'>
                <div id='gitConteinerSon'>
                    <h2>Erik Oliveira</h2>
                    <h3>SoL1dcs</h3>
                    <ButtonDef logo={GitHubLogo} texto={'Meu GitHub'} />
                </div>
                <div>
                    <img src='https://avatars.githubusercontent.com/u/94372570?s=400&u=806d0e4c4145d72d203def471d3becf41f5123de&v=4'></img>
                </div>
            </div>
            <div id='gitConteinerMobile'>
                    <h2>Erik Oliveira</h2>
                    <img src='https://avatars.githubusercontent.com/u/94372570?s=400&u=806d0e4c4145d72d203def471d3becf41f5123de&v=4'></img>
                    <h3 style={{color:'#2C2E2FAF',}}>SoL1dcs</h3>
                    <ButtonDef logo={GitHubLogo} texto={'Meu GitHub'} />
            </div>
*/