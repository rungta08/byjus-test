import React from 'react';
import Job from './Job';
import {Form, Label, Input, FormGroup, Container, Row, Col} from 'reactstrap';


//functional component to render list of filtered jobs
const Jobs=(props)=>{

    let sortedJobs = props.jobs;
    //sort Experience
    const handleSortExp = (e) =>{
        props.handleSortE(e);
    }
    //sort Location
    const handleSortLoc = (e) =>{
        props.handleSortL(e);
    }

    //render each job
    const jobCard = sortedJobs.map((job,index)=>
                           <Job key={index} job={job}/>                     
                    );

    return(
            <Container>
                <Row>
                    <Col xl='2' md='4' sm='5' xs='5'>
                        <Container>
                            <Form>
                                <Row>
                                    <FormGroup>
                                        <Label for='sortExperience'>Sort By Experience</Label>
                                        <Input type="select" name="sortExperience" id="sortExperience" onChange={handleSortExp}>
                                            <option>Asc</option>
                                            <option>Desc</option>
                                        </Input>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup>
                                        <Label for='sortLocation'>Sort By Location</Label>
                                        <Input type="select" name="sortLocation" id="sortLocation" onChange={handleSortLoc}>
                                            <option>Asc</option>
                                            <option>Desc</option>
                                        </Input>
                                    </FormGroup>
                                </Row>
                            </Form>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Row>Total Jobs: {props.jobs.length}</Row>
                            <Row>
                                {jobCard}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
    );
}

export default Jobs;