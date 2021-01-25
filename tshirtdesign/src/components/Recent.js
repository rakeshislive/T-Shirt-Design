import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row } from 'reactstrap'
import { connect } from 'react-redux';

class MemeList extends Component {
    render() {
        const { design} = this.props;
        return(
            <Row>
                { design && design.map(design => {
                    return(
                        <Card key={design.id} className="ml-2">
                            <CardImg src="" className="card-img-top" />
                            <CardBody>
                                <CardTitle>{ design.upperText }</CardTitle>
                                <CardText>{ design.lowerText }</CardText>
                                <Link to=""><Button className="btn-primary">View Meme</Button></Link>
                            </CardBody>
                        </Card>
                    )
                })}
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        design: state.design.designs
        //state.design is coming from mainReducer
        //design.designs is coming from designReducer initial Reducers
    }
}

export default connect(mapStateToProps)(MemeList);