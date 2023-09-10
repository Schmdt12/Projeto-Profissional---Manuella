import Header from "../components/headerLog/Header"
import Footer from "../components/footerLog/Footer"
import Main from "../components/mainLogin/mainLogin"


function Login(){
  return (
    <>
   <body>
    <div class="tela-inteira">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</body>

    </>
  );
}

export default Login;