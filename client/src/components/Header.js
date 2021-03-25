import { NavLink } from "react-router-dom";



const Header = () =>{
    return(
        <div>
            <header>
                <ul>
                    <li><h3>Google Books</h3></li>
                    <li><NavLink to="/" >Search</NavLink></li>
                    <li><NavLink to="/saved" >Saved</NavLink></li>
                </ul>
            </header>
            <div id = "header">
               <h1>GOOGLE BOOKS</h1>
              
            </div>
        </div>
    )
}

export default Header;