import React from "react";
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="mainmenu-area" data-spy="affix" data-offset-top="200">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#primary_menu">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="/">
                        <img src={"/images/logo.png"} alt="Logo"/>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="primary_menu">
                    <ul className="nav navbar-nav mainmenu">
                        <li><a href={`/#service`}>Services</a></li>
                        <li><a href={"/#technologies"}>Technologies</a></li>
                        <li><a href={"/#solutions"}>Solutions</a></li>
                        {/*<li><Link href={"/case-studies"}>Case Studies</Link></li>*/}
                        <li><Link href={"/approaches"}>Approaches</Link></li>
                        <li><Link href={"/pricing"}>Pricing</Link></li>
                        <li><a href={"/#contact-us"}>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;