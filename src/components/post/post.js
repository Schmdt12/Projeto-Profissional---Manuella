import './post.css';
import ProfilePicture from "../../assets/userProfile.png"

function Post(){
    return(
        <>
        <section className='boxAdicionarPost'>
            <div className='boxDentro'>
                <p className='textAdicionarPost'>Adicione seu post</p>
            </div>
            <div className='boxPost'>
                <img className='imgpost' alt='foto de perfil' src={ProfilePicture}></img>
                <p className='textopost'>Usúario_1 avaliou um livro</p>
                <div className='boxDentroPost'></div>
            </div>
        </section>

        
        </>
    )
}

export default Post