import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { BrowserRouter as Router} from 'react-router-dom'
import { storage } from '../config/firebaseConfig'
import { saveMeme } from '../store/actions/saveDesignActions';
import { connect } from 'react-redux'
// All Components 
import Header from "./Header";
import Display from "./Display";
import Settings from "./Settings";
import Recent from './Recent';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textColor: 'dark',
            background: 'bg-primary',
            upperText: 'Write upper text',
            lowerText: 'Write lower text',
            textSize: 25,
            textFont: 'Segoe UI',
            memeImage: 'https://dummyimage.com/vga'
        }
    }
    
    handleBackground = (e) => {
        this.setState({
            background: (e.target.className).slice(4)
        })
    }

    handleTextColor = (e) => {
        this.setState({
            textColor: (e.target.className).slice(7)
        })
    }

    handleTextSize = (e) => {
        this.setState({
            textSize: e.target.value
        })
    }

    handleUpperText = (e) => {
        this.setState({
            upperText: e.target.value
        })
    }

    handleLowerText = (e) => {
        this.setState({
            lowerText: e.target.value
        })
    }

    handleTextFont = (e) => {
        this.setState({
            textFont: e.target.value
        })
    }

    handleImageUpload = (e) => {
        if(e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`image/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot)
            },
            (err) => {
                console.log(err);
            },
            () => {
                storage.ref('image').child(image.name).getDownloadURL().then(url => {
                    this.setState({memeImage: url})
                })
            })
        }
    }

    handleSaveMeme = (e) => {
        if(e.target.id === 'saveMeme') {
            this.props.saveMeme(this.state)
        }
    }

    render() {
        return(
            <Router>
                <Header title="Seven"/>
                <Container className="d-flux">
                    <Row style={Outline}>
                        <div className="col-md-5">
                            <Display display={this.state} />
                        </div>
                        <div className="col-md-7">
                            <Settings 
                                background={this.handleBackground}
                                textColor={this.handleTextColor}
                                textSize={this.handleTextSize}
                                upperText={this.handleUpperText}
                                lowerText={this.handleLowerText}
                                uploadImage={this.handleImageUpload}
                                textFont={this.handleTextFont}
                                saveMeme={this.handleSaveMeme} />
                        </div>
                    </Row>
                    <Row className="mt-4">
                        <Recent />
                    </Row>
                </Container>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveMeme: (design) => dispatch(saveMeme(design))
    }
}

export default connect(null, mapDispatchToProps)(Main);

const Outline = {
    marginTop: '50px',
    border: '2px solid rgb(173, 149, 147)',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '20px'
}

