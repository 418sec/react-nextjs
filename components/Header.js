import React from "react";
import Navigation from "./Navigation";

const Header = ({children}) => {
    return (
        <>
            <Navigation/>
            <header className="home-area overlay" id="home_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;