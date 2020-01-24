import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>SASIKUMAR SRINIVASAN</h1>
                            <h2>Fornt-End & React Developer</h2>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | JSON | Node.js</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* GIthub */}
                            <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* Youtube */}
                            <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>

                            {/* Facebook */}
                            <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
                
                

            </div>
            
        )
    }
}

export default Landingpage;

