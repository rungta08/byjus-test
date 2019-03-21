import React from 'react';
import {Form, Label, Input, FormGroup, Container, Button, Row, Col} from 'reactstrap';

//functional component for search form
const Search=(props)=>{

        //submit handler
        const submitHandler=(e)=>{
            e.preventDefault();
            props.searchHandler(e.target);
        };
    
        return(

            <Container data-test='SearchComponent'>
                <Form onSubmit={submitHandler.bind(this)}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for='selectExperience'>Experience</Label>
                                <Input type="select" name="selectExperience" id="selectExperience">
                                    <option>All Levels</option>
                                    <option>Entry Level</option>
                                    <option>Associate</option>
                                    <option>Mid-Senior</option>
                                    <option>Executive</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for='selectLocation'>Location</Label>
                                <Input type="select" name="selectLocation" id="selectLocation">
                                    <option>Anywhere in India</option>
                                    <option>Bangalore/Bengaluru</option>
                                    <option>Tumkur</option>
                                    <option>Mumbai</option>
                                    <option>Hyderabad</option>
                                    <option>Thiruvananthapuram</option>
                                    <option>Kochi/Cochin</option>
                                    <option>Kolkata</option>
                                    <option>New Delhi</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for='Skills'>Skills</Label>
                                <Input type="text" name="skills" id="skills" placeholder='Enter Skills or Company to search'/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        );

}

export default Search;