import React, { } from 'react'
import { Card, CardHeader, CardImg, CardFooter } from 'reactstrap';

const Display = ({ display }) => {
    return(
        <>
            <Card className="card-content m-3">
                <CardHeader className={`uppertext text-center ${display.headerColor} text-${display.headerTextColor}`}>{display.headerText}</CardHeader>
                <div className="imgTshirt text-center">
                    <CardImg
                        className="img-responsive"
                        src="https://via.placeholder.com/600x350.png"
                        alt= "Meme img" />
                </div>
                <CardFooter className={`lowertext text-center ${display.footerColor} text-${display.footerTextColor}`}>{display.footerText}</CardFooter>
            </Card>
        </>
    )
}

export default Display;