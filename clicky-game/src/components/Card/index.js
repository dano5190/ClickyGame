import React, { Components } from "react";


/*
class Card extends Components{
    state = {
        image: "",
        isClicked: false
    };

    handleOnClick = event => {
        
    }
};*/

function Card(props) {
    return (
        <div
        className = "card"
        
   /*     style={{
            backgroundImage: props.image ? `url(${props.image})` : "none",
        
    stretch: {
        width:200,
        height: 200
    }}}*/
   // img={props.image}
     //   width="200"
     //   height="200"
        onClick={props.handlePicClick}
        //data-value="false"
        >
        
        <img src={props.image} alt="A cute cat" height = "200" data-value={props.clicked}/>
        </div>
    );
}

export default Card;