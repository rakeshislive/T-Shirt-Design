import React, {  } from 'react'
import { Container, Input, Row } from 'reactstrap'
import '../stylesheet/settings.css';

const Settings = ({ headerColor, footerColor, headerTextColor, footerTextColor }) => {
    return(
        <>
        <Container className="mt-3">
            <Row>
                <div className="col-md-6">
                    <h6>Header Design</h6>
                </div>
                <div className="col-md-6">
                    <h6>Footer Design</h6>
                </div>
            </Row>
            <p className="text-center">Background</p>
            <Row>
                <div className="col-md-6">
                    <div className="bgColor mt-n2">
                        <span onClick={headerColor} className="dot bg-primary"></span>
                        <span onClick={headerColor} className="dot bg-success"></span>
                        <span onClick={headerColor} className="dot bg-warning"></span>
                        <span onClick={headerColor} className="dot bg-light"></span>
                        <span onClick={headerColor} className="dot bg-dark"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bgColor mt-n2">
                        <span onClick={footerColor} className="dot bg-primary"></span>
                        <span onClick={footerColor} className="dot bg-success"></span>
                        <span onClick={footerColor} className="dot bg-warning"></span>
                        <span onClick={footerColor} className="dot bg-light"></span>
                        <span onClick={footerColor} className="dot bg-dark"></span>
                    </div>
                </div>
            </Row>
            <p className="text-center">Text Colour</p>
            <Row>
                <div className="col-md-6">
                    <div className="bgColor mt-n2">
                        <span onClick={headerTextColor} className="dot bg-primary"></span>
                        <span onClick={headerTextColor} className="dot bg-success"></span>
                        <span onClick={headerTextColor} className="dot bg-warning"></span>
                        <span onClick={headerTextColor} className="dot bg-light"></span>
                        <span onClick={headerTextColor} className="dot bg-dark"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bgColor mt-n2">
                        <span onClick={footerTextColor} className="dot bg-primary"></span>
                        <span onClick={footerTextColor} className="dot bg-success"></span>
                        <span onClick={footerTextColor} className="dot bg-warning"></span>
                        <span onClick={footerTextColor} className="dot bg-light"></span>
                        <span onClick={footerTextColor} className="dot bg-dark"></span>
                    </div>
                </div>
            </Row>
            <p className="text-center">Message</p>
            <Row>
                <div className="col-md-6">
                    <div className="text mt-n1">
                        <Input className="custom-input" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text mt-n1">
                        <Input className="custom-input" type="text" />
                    </div>
                </div>
            </Row> 
            <p className="text-center">Meme Image</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Upload</span>
                </div>
                <div className="custom-file">
                    <Input type="file" className="custom-file-input" id="meme" /> 
                    <label className="custom-file-label" htmlFor="meme">Choose file</label>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Settings;