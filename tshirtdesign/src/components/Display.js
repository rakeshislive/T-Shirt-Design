import React, { } from 'react'
import { Card, CardHeader, CardImg, CardFooter, Container } from 'reactstrap';

const Display = ({ display }) => {
    return(
        <>
            <Container className="mt-2">
                <h6>Meme Display</h6>
                <Card className="card-content">
                    <CardHeader className={`uppertext text-center ${display.background} text-${display.textColor}`} style={{fontSize: `${display.textSize}px`, fontFamily: `${display.textFont}`}}>{display.upperText}</CardHeader>
                    <div className="imgTshirt text-center">
                        <CardImg
                            className="img-responsive"
                            src={`${display.memeImage}`}   
                            alt= "Meme img" />
                    </div>
                    <CardFooter className={`lowertext text-center ${display.background} text-${display.textColor}`}  style={{fontSize: `${display.textSize}px`, fontFamily: `${display.textFont}`}}>{display.lowerText}</CardFooter>
                </Card>
            </Container>
        </>
    )
}

export default Display;