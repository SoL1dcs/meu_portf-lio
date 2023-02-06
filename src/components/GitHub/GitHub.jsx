import './GitHub.css';
import ButtonDef from '../Button/ButtonDef'
import GitHubLogo from '../Image/GitHub.png'

function GitHub (){
    return(
        <div>
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
                    <h3>SoL1dcs</h3>
                    <ButtonDef logo={GitHubLogo} texto={'Meu GitHub'} />
            </div>
        </div>
        
    )
}
export default GitHub