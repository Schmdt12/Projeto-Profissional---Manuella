import './header.css';
import Logo from '../../assets/logo.png';

function Header(){
    return(
        <header>
            <h1>Wildflower Literature</h1>
            <img src={Logo} className='logo' alt='oioi'/>
        </header>

    )
}

export default Header