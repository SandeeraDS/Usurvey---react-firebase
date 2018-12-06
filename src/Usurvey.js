import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyBSWtgpCduuYwggLmAuGs6uZGKbGvjntBw",
    authDomain: "usurvey-c648f.firebaseapp.com",
    databaseURL: "https://usurvey-c648f.firebaseio.com",
    projectId: "usurvey-c648f",
    storageBucket: "usurvey-c648f.appspot.com",
    messagingSenderId: "669022453209"
};
firebase.initializeApp(config);

class Usurvey extends Component {

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        console.log(studentName)
        this.setState({ studentName: studentName }, function () { console.log(this.state) })
    }
    answerDetected(event) {
        // var
    }
    questionSubmitted(event) {

    }


    constructor(props) {
        super(props);
        this.state = {

            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        }
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerDetected = this.answerDetected.bind(this);
        this.questionSubmitted = this.questionSubmitted.bind(this);
    }
    render() {

        var studentName;
        var questions;

        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hy, Student please let us know your name :</h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="Enter your name" ref="name" />
                </form>
            </div>;
            questions = null;
        }
        else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <h1>Welcome  to U-Surway, {this.state.studentName}</h1>

            questions = <div>
                <h1>Here are some questions : </h1>
                <form onSubmit={this.questionSubmitted}>
                    <div className="card">
                        <label>What kind of courses you like most: </label><br />
                        <input type="radio" name="answer1" value="Technology" onChange={this.answerDetected} />Technology
                        <input type="radio" name="answer1" value="Design" onChange={this.answerDetected} />Design
                        <input type="radio" name="answer1" value="Marketing" onChange={this.answerDetected} />Marketing
                    </div>
                    <div className="card">
                        <label>You are a: </label><br />
                        <input type="radio" name="answer2" value="Student" onChange={this.answerDetected} />Student
                        <input type="radio" name="answer2" value="In-Job" onChange={this.answerDetected} />In-Job
                        <input type="radio" name="answer2" value="Looking-Job" onChange={this.answerDetected} />Looking-Job
                    </div>

                    <div className="card">
                        <label>Is online learing helpful: </label><br />
                        <input type="radio" name="answer3" value="Yes" onChange={this.answerDetected} />Yes
                        <input type="radio" name="answer3" value="No" onChange={this.answerDetected} />No
                        <input type="radio" name="answer3" value="May be" onChange={this.answerDetected} />May be
                    </div>
                    <input className="feedback-button" type="submit" value="submit" />
                </form>
            </div>;
        }

        return (
            <div>
                {studentName}
                -----------------------------------------------------------------------------
            {questions}
            </div>

        );
    }
}

export default Usurvey;