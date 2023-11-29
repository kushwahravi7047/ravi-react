import React from "react";

export default function BioData(props) {
    // const mydata = props;
    // const [name , address , mobileNo] = mydata;

    return (
        <>
            <table style={{ border: "2px solid black" }}>
                <tr style={{ border: "2px solid black" }}>
                    <td style={{border:"2px solid black"}}> FULL NAME</td>
                    <td style={{border:"2px solid black"}}> MOBILE.NO </td>
                    <td style={{border:"2px solid black"}}> ADDRESS </td>
                </tr>
                <tr style={{ border: "2px solid black" }}>
                    <td style={{border:"2px solid black"}}>{props.name}</td>
                    <td style={{border:"2px solid black"}}> {props.mobileNo} </td>
                    <td style={{border:"2px solid black"}}>  {props.address} </td>
                </tr>

            </table>

        </>
    )
}
