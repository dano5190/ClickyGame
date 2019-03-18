import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Cat1 from "../components/clicky-pics/cat1.png";
import Cat2 from "../components/clicky-pics/cat2.png";
import Cat3 from "../components/clicky-pics/cat3.png";
import Cat4 from "../components/clicky-pics/cat4.png";
import Cat5 from "../components/clicky-pics/cat5.png";
import Cat6 from "../components/clicky-pics/cat6.png";
import Cat7 from "../components/clicky-pics/cat7.png";
import Cat8 from "../components/clicky-pics/cat8.png";
import Cat9 from "../components/clicky-pics/cat9.png";


class Pics extends Component {
state = {
   // clickedPics: [],
    clickCount: 0,
    maxCount: 9,
    numWins: 0,
    numLoses: 0,
    cat1: "false",
    cat2: "false",
    cat3: "false",
    cat4: "false",
    cat5: "false",
    cat6: "false",
    cat7: "false",
    cat8: "false",
    cat9: "false"
}

componentDidMount = () => {
    this.newGame();
}

newGame = () => {

    if(this.state.clickCount === 0){
        console.log("false!");
        //target.attribute.getNamedItem("data-value").value = "false";
        return "false";
    }
    else{ 
        return "false";
}
}

handlePicClick = event => {
    console.log("Hello there!");
    const wasClicked = event.target.attributes.getNamedItem("data-value").value;

    const newState = { ...this.state };

    if(wasClicked === "false"){
        newState.clickCount = this.state.clickCount + 1;

        if(newState.clickCount === newState.maxCount){
            newState.numWins = this.state.numWins + 1;
            newState.clickCount = 0;
            this.render();
        } else {
            event.target.attributes.getNamedItem("data-value").value = "true";
        }
        
    } if(wasClicked === "true"){
        newState.clickCount = 0;
        newState.numLoses = this.state.numLoses + 1;
       // this.handleRenderPage();
        this.render();
    }

    this.setState(newState);
    
};


handleRenderPage = () => {
    return (<Container fluid>
        <Row>
            <div>
                <h1>Clicks to Win: {this.state.maxCount}</h1>
                <h1>Click Count: {this.state.clickCount}</h1>
                <h1>Number of Wins: {this.state.numWins}</h1>
                <h1>Number of Losses: {this.state.numLoses}</h1>
            </div>
        </Row>
        <Row>
 
        </Row>
        <Row>
            <Col size = "md-4">
            <Card image={ Cat1 } handlePicClick={this.handlePicClick} clicked = "false"/> 
            </Col>

            <Col size = "md-4">
            <Card image={ Cat2 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat3 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>
            
        </Row>
        <hr></hr>
        <Row>
            <Col size="md-4">
            <Card image={ Cat4 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat5 } handlePicClick={this.handlePicClick} clicked = "false" />
            </Col>

            <Col size = "md-4">
            <Card image={ Cat6 } handlePicClick={this.handlePicClick} clicked = "false" />
            </Col>
        </Row>
        <hr></hr>

        <Row>
            <Col size="md-4">
            <Card image={ Cat7 } handlePicClick={this.handlePicClick} clicked="false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat8 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image = { Cat9 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>
        </Row>
        </Container>);
};


    render() {
        
       /* return (<Container fluid>
        <Row>
            <div>
                <h1>Clicks to Win: {this.state.maxCount}</h1>
                <h1>Click Count: {this.state.clickCount}</h1>
                <h1>Number of Wins: {this.state.numWins}</h1>
                <h1>Number of Losses: {this.state.numLoses}</h1>
            </div>
        </Row>
        <Row>
 
        </Row>
        <Row>
            <Col size = "md-4">
            <Card image={ Cat1 } handlePicClick={this.handlePicClick} clicked = {this.state.cat1}/> 
            </Col>

            <Col size = "md-4">
            <Card image={ Cat2 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat3 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>
            
        </Row>
        <hr></hr>
        <Row>
            <Col size="md-4">
            <Card image={ Cat4 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat5 } handlePicClick={this.handlePicClick} clicked = "false" />
            </Col>

            <Col size = "md-4">
            <Card image={ Cat6 } handlePicClick={this.handlePicClick} clicked = "false" />
            </Col>
        </Row>
        <hr></hr>

        <Row>
            <Col size="md-4">
            <Card image={ Cat7 } handlePicClick={this.handlePicClick} clicked="false"/>
            </Col>

            <Col size="md-4">
            <Card image={ Cat8 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>

            <Col size="md-4">
            <Card image = { Cat9 } handlePicClick={this.handlePicClick} clicked = "false"/>
            </Col>
        </Row>
        </Container>);
    }*/
    return (this.handleRenderPage());
}
};

export default Pics;