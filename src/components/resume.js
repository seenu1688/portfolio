import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <div style={{textAlign:"center"}}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style={{height:'200px'}}
                        />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>SEENU</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'100%' }}/>
                        <p>I am a very passionate JavaScript developer. I like to learning new things every day and keeping up with the new technologies.I started as a HTML/CSS developer back in 2013 and since then I'm improving my skills with practice as much as I can.
I am also a man of strong morals and principles which guides me through life.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'100%' }}/>
                        <h5>Address</h5>
                        <p>Bagalore - 560037 Karnataka</p>
                        <h5>Phone</h5>
                        <p>+91-9543302263</p>
                        <h5>Email</h5>
                        <p>sasikumar.sinu@gmail.com</p>
                        <h5>Website</h5>
                        <p>https://seenu1688.github.io</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2011}
                            endYear={2014}
                            schoolName="Periyar University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                        />

                        <Education
                            startYear={2008}
                            endYear={2011}
                            schoolName="Govt Higher Secondary School"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h1>Experience</h1>
                        <Experience
                            startYear={2008}
                            endYear={2011}
                            jobName="Govt Higher Secondary School"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                        />

                        <Experience
                            startYear={2008}
                            endYear={2011}
                            jobName="Govt Higher Secondary School"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h1>Skills</h1>
                        <Skills
                            skill='PHOTOSHOP'
                            progress={100}
                        />
                        <Skills
                            skill='HTML/CSS'
                            progress={100}
                        />

                        <Skills
                            skill='JAVASCRIPT'
                            progress={100}
                        />
                        <Skills
                            skill='REACT'
                            progress={100}
                        />  
                        <Skills
                            skill='NODE.JS'
                            progress={100}
                        />     
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;

