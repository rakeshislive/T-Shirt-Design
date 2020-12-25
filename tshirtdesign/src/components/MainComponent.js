import React, { Component } from "react";
import { Container, Row } from "reactstrap";

// All Components 
import Header from "./Header";
import Display from "./Display";
import Settings from "./Settings";

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerText: 'Header Text',
            footerText: 'Footer Text',
            headerColor: 'bg-primary',
            footerColor: 'bg-info',
            headerTextColor: 'dark',
            footerTextColor: 'Black',
            memeImage: ''
        }
    }
    
    handleHeaderBgColor = (e) => {
        this.setState({
            headerColor: (e.target.className).slice(4)
        })
    }

    handleFooterBgColor = (e) => {
        this.setState({
            footerColor: (e.target.className).slice(4)
        })
    }

    handleHeaderTxtColor = (e) => {
        this.setState({
            headerTextColor: (e.target.className).slice(7)
        })
    }

    handleFooterTxtColor = (e) => {
        this.setState({
            footerTextColor: (e.target.className).slice(7)
        })
    }

    render() {
        return(
            <div>
                <Header title="Seven"/>
                <Container>
                    <Row style={Outline}>
                        <div className="col-md-4">
                            <Display display={this.state} />
                        </div>
                        <div className="col-md-8">
                            <Settings 
                                headerColor={this.handleHeaderBgColor}
                                footerColor={this.handleFooterBgColor}
                                headerTextColor={this.handleHeaderTxtColor}
                                footerTextColor={this.handleFooterTxtColor} />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

const Outline = {
    marginTop: '50px',
    border: '2px solid rgb(173, 149, 147)',
    borderRadius: '5px',
    textAlign: 'center'
}

