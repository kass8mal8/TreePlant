import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../../App";
import { useContext, useState } from "react";


const HomeHeader = ({ handleProfile }) => {
    const user = useContext(userContext)
    const d = new Date().toLocaleTimeString()

    const navbar = document.querySelector('.home-header')
    // const sticky = navbar.offsetTop

    window.onscroll =()=> {        
        if(window.pageYOffset >= 50){
            console.log(window.pageYOffset)
            navbar.classList.add("sticky")        
        }
        else{
            navbar.classList.remove("sticky")
        }
    }

    return (  
        <div className="home-header">
            { user && parseInt(d[0]) < 12 ? <h3> morning {user.displayName} </h3> : <h3>afternoon {user.displayName}</h3>}

            <ul className="icons">
                <li>
                    <FontAwesomeIcon icon={faCog} className="icon" />
                </li>
                <li onClick={handleProfile}>
                    { user ? 
                        <img src={user.photoURL} alt="user-profile" /> : 
                        <FontAwesomeIcon icon={faUserCircle} className="icon"/> 
                    }
                </li>
            </ul>
        </div>
    );
}
 
export default HomeHeader;