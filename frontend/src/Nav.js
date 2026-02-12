import { Link } from "react-router-dom"
import "./Nav.css"
import { useState } from "react";

const Nav =()=>
{

    const [open, setOpen] = useState(false);

    return(
        <div className="nav">

            <Link to={"/"} onClick={() => setOpen(false)}><h3 data-aos="zoom-out">Online <span>Test.</span></h3></Link>

            <div>
                <ul className={open ? "active" : ""}>
                    <Link to={"/"} onClick={() => setOpen(false)}><li>Home</li></Link>
                    <Link to={"/test"} onClick={() => setOpen(false)}><li>Our Section</li></Link>
                </ul>
            </div>

            <i className="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
        </div>
    )
}

export default Nav