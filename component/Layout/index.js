import React from "react";
import Header from "./header";
import Footer from "./footer";


export default function Layout(props) {
    return (
        <div>
            <Header/>
            <span style={{background:"green", color:"blue"}}> This is Basic Layout</span>
            {props.children}
            <Footer/>
        </div>
    )
} 