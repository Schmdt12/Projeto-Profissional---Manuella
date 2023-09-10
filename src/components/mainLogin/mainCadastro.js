import './main.css';
import LogoGrande from "../../assets/logoGrande.png"
import { useNavigate } from 'react-router-dom';

function Cadastro(){

    const navigate = useNavigate()
  
    const toFeed = ()=> {
    navigate('/feed')
    }

    return(
        <main>
            <img src={LogoGrande} className='logo3' alt='logo grande na esquerda do site'></img>
            
            <div className='botaocadastro'>
                <h1>Cadastro</h1>
            </div>
            
            <div className='boxCadastro'>
                <label className = 'textformCadastro' for="nome">Email:</label>

                    <form type="submit">
                        <input class ="form" type='text' id='nome' placeholder='Escreva seu Email'/>
                    </form>

                <label className = 'textformCadastro' for="nome">Usuário:</label>
                    
                    <form type="submit">
                        <input class ="form" type='text' id='nome' placeholder='Escreva seu Usuário'/>
                    </form>
                
                <label className = 'textformCadastro' for="nome">Senha</label>
                
                    <form type="submit">
                        <input class ="form" type='text' id='nome' placeholder='Escreva sua senha'/>
                    </form>
                
                <label className = 'textformCadastro' for="nome">Comfirmar Senha</label>
                
                    <form type="submit">
                        <input class ="form" type='text' id='nome' placeholder='Confirme sua senha'/>
                    </form>
                
                <button onClick={toFeed} className='botaoentrarCadastro'>Cadastre-se</button>
            </div>
        </main>

    )
}

export default Cadastro