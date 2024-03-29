import React from "react"
import Button from "./Button"
import { GiFoodTruck } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


import  "../Stylecss/Navbar.css"
import background from "../img/cooking-food.jpg"
import { auto } from "async";
const Navbar=()=>{
    return(
        <div>
            <body style={{ backgroundImage: `url(${background})` ,backgroundRepeat: 'no-repeat' , height:"100vh",width:"100%",backgroundSize: "cover"
                        ,backgroundPosition:"center",position:"relative"}}>
                <div className="container" >
                    <div className="nav">
                        <GiFoodTruck className="logo"/>

                        <ul>
                            <li><a href="HOME">HOME</a></li>
                            <li><a href="MENU">MENU</a></li>
                            <li><a href="ABOUT">ABOUT</a></li>
                            <li><a href="SHOP">SHOP</a></li>
                            <li><FaShoppingCart /></li>
                            <li><FaSearch /></li>
                        </ul>
                    </div>
                    <div>
                        <div className="content">
                            <p className="quotes">GOOD FOOD GOOD HEALTH</p>
                        </div>
                        
                    </div>
                       <Button title="ORDER NOW / RESERVATION"/>
                       
                </div>
                        
            </body>
        </div>
    )
}

export default Navbar