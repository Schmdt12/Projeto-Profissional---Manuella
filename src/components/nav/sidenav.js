import Logo from "../../assets/logo.png"
import "./sideNav.css"
import { useNavigate } from 'react-router-dom';


function SideNav(){

    const navigate = useNavigate()
    
    const toFeed = ()=> {
        navigate('/feed')
        }
    const toPerfil = ()=> {
        navigate('/perfil')
        }
    const toLivros = ()=> {
        navigate('/livros')
        }
    const toVestibulares = ()=> {
        navigate('/vestibulares')
        }
    const toReclama = ()=> {
        navigate('/reclamações')
        }
    const toConfig = ()=> {
        navigate('/configurações')
        }

    return(
        <>
         <nav className="sideNav">
            <img onClick={toFeed} className= "imgLogo"src={Logo} alt="logo do site"/>
            <p className="textoNome">Wildflowers <br/> Literature</p>

            <button onClick={toPerfil} className="BotaoNav">Perfil</button>
            <button onClick={toLivros }className="BotaoNav">Livros</button>
            <button onClick={toVestibulares} className="BotaoNav">Vestibulares</button>
            <button onClick={toReclama} className="BotaoNav">Reclamações</button>
            <button onClick={toConfig} className="BotaoNav">Configurações</button>
         </nav>
        </>
    )
}

export default SideNav