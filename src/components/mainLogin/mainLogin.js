import './main.css';
import LogoGrande from "../../assets/logoGrande.png"
import { Link, useNavigate } from 'react-router-dom';

function Login(){
    
    const navigate = useNavigate()
  
    const toFeed = ()=> {
    navigate('/feed')
    }

    
    return(
        <main>
            <img src={LogoGrande} className='logo2' alt='logo grande na esquerda do site'></img>
            <div className='botaologin'>
                <h1>Login</h1>
            </div>
            <div className='box'>
                <label className = 'textform' for="nome">
                    Email/Usuário:</label>
                    <form type="submit">
                    </form>
                        <input class ="form" type='text' id='nome' placeholder='Escreva seu Email ou Usuário'/>
                
                <label className='textform'>
                    Senha:
                </label>
                    <form type="submit">
                        <input class ="form" type='text' name='nome' placeholder='Escreva sua senha'/>
                    </form>

                <div>
                    <p className='texto_cadastro'>Ainda não tem uma<br/> conta
                     <Link to="/cadastro"> clique aqui!!</Link></p>
                </div>
                <button onClick={toFeed} className='botaoentrar'>Entrar</button>
            </div>
        </main>

    )
}

export default Login