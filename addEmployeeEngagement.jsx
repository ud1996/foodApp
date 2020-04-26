import React, { Component } from "react";
import { Container, Card } from "react-bootstrap"
class addEmployeeEngagement extends Component {
    state = {
        eventName:string,
        eventNotes:string,
        eventDate:Date,
        imagesFile:[],
    }
    render() {
        return (
            <div>
                <Container>
                    <Card>
                        <Card.Title>Add Event</Card.Title>
                        <Card.Body>
                            <Form>

                                <Form.Group controlId="eventName">
                                    <Form.Label>Event Name</Form.Label>
                                   <Form.Control
                                        type="text" name="eventName" onChange={this.changeHandler}
                                    />
                                </Form.Group>

                            <Form.Group controlId="eventNotes">
                                <Form.Label> Event Notes </Form.Label>
                                <Form.Control
                                type="textArea" name="eventNotes"  onChange={this.changeHandler}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="imagesFile">
                                <Form.Label> Add Images </Form.Label>
                                <Form.Control
                                type="file" name="imagesFile" multiple  onChange={this.fileChangeHandler}
                                ></Form.Control>
                            </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

        )
    }

}
export default addEmployeeEngagement;