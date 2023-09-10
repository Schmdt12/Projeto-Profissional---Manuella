import SideNav from "../components/nav/sidenav";
import "../components/nav/sideNav.css"
import Post from "../components/post/post.js";


function feed(){
    return (
      <>
      <div className="telaInteira">
        
        <SideNav/>
        <Post/>
      </div>

      </>
    );
  }
  
  export default feed;