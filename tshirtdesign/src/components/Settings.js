import React from 'react'
import { Container, Input, Row, Form, FormGroup, Label, Button } from 'reactstrap'
import '../stylesheet/settings.css';

const Settings = ({ background, textColor, textSize, upperText, lowerText, uploadImage, textFont, saveMeme }) => {
    return(
        <>
        <Container className="mt-3 text-left">
            <h6>Settings</h6>
            <Row>
                <div className="col-md-6">
                {/* Background Color */}
                <p>Background</p>
                    <div className="mt-n2">
                        <span onClick={background} className="dot bg-primary"></span>
                        <span onClick={background} className="dot bg-success"></span>
                        <span onClick={background} className="dot bg-warning"></span>
                        <span onClick={background} className="dot bg-light"></span>
                        <span onClick={background} className="dot bg-dark"></span>
                    </div>
                <p>Text colour</p>
                    <div className="mt-n2">
                        <span onClick={textColor} className="dot bg-primary"></span>
                        <span onClick={textColor} className="dot bg-success"></span>
                        <span onClick={textColor} className="dot bg-warning"></span>
                        <span onClick={textColor} className="dot bg-light"></span>
                        <span onClick={textColor} className="dot bg-dark"></span>
                    </div>
                <p>Text Size</p>
                    <Form className="mt-n2">
                        <FormGroup style={{width: '250px'}}>
                            <Input type="range" name="size" onChange={textSize} className="form-control-range" min="10" max="60" />
                        </FormGroup>
                    </Form>
                <p>Text Font</p>    
                    <div className="mt-n2">
                        <select onChange={textFont} defaultValue="Segoe Print" className="custom-select">
                            <option value="Pristina">Pristina</option>
                            <option value="Comic Sans MS">Comic Sans MS</option>
                            <option value="Segoe UI">Segoe UI</option>
                            <option value="Segoe Print">Segoe Print</option>
                            <option value="MV Boli">MV Boli</option>
                            <option value="Ink Free">Ink Free</option>
                        </select>
                    </div>
                <p>Uppertext</p>
                    <div style={{width: '300px'}} className="mt-n2">
                        <Input onChange={upperText} className="custom-input" type="text"/>
                    </div>  
                <p>Lowertext</p>
                    <div style={{width: '300px'}} className="mt-n2">
                        <Input onChange={lowerText} className="custom-input" type="text" />
                    </div>
                    </div>
                <div className="col-md-6">
                    <Input type="file" id="input" onChange={uploadImage} className="custom-file-input" />
                    <Label className="custom-file-label" htmlFor="input">Choose Meme image</Label>
                </div>
            </Row>
            <Button className="btn btn-primary mt-2" onClick={saveMeme} id="saveMeme">Save</Button>
        </Container>
        </>
    )
}

export default Settings;