import React from 'react';
import {Card, CardTitle, CardBody} from 'reactstrap';
import '../css/Job.css';

//functional component to render single job
const Job=(props)=>{

    let job = props.job;
    return(
            <Card>
                <CardBody>
                    <CardTitle><h5>{job.title}</h5></CardTitle>
                    
                        <div>{job.applylink ? 'Applylink: '+job.applylink:''}</div>
                        <div>{job.jd ? 'Job Description: '+job.jd :''}</div>
                        <div>{job.companyname ? 'Company: '+job.companyname:''}</div>
                        <div>{job.experience ? 'Experience: '+job.experience:''}</div>
                        <div>{job.location ? 'Location: '+job.location:''}</div>
                        <div>{job.salary ? 'Salary: '+job.salary:''}</div>
                        <div>{job.skills ? 'Skills: '+job.skills:''}</div>
                        <div>{job.source ? 'Source: '+job.source:''}</div>
                        <div>{job.startdate ? 'Startdate: '+job.startdate:''}</div>
                        <div>{job.type ? 'Type: '+job.type:''}</div>
                        <div style={{color: 'Red'}}><h6>{
                            job.enddate ? 
                                new Date(job.enddate)-new Date()>2 ? 'Expiring Soon' : ''
                            :''

                        }</h6></div>

                </CardBody>
            </Card>
    );
}


export default Job;