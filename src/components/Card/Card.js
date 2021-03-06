import React, { Component } from "react";
import "./Card.css";
import axios from "axios";
import CardQuestions from "./CardQuestions/CardQuestions";
import Answers from "./Answers/Answers";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      quizQuestions: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/quiz")
      .then(response => {
        this.setState({ quizQuestions: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { quizQuestions } = this.state;
    return (
      <section className="Card">
        <div className="Card-Container">
          <div className="Card-Left">
            <CardQuestions quizQuestions={quizQuestions} />
          </div>
          <div className="Card-Right">
            <Answers updateDisplay={this.props.updateDisplay} />
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
