import React, { Component } from "react";
import { Grid ,Cell }  from 'react-mdl';


class Aboutme extends Component{
    render(){
        return(
            <div style={{textAlign:"center", width:800, display:'flex', margin:'0 auto'}}>
                 <Grid>
                    <Cell col={12} className="about">
                        <div style={{textAlign:"center"}}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style={{height:'200px'}}
                        />
                        </div>
                        <h2>SEENU</h2>
                        <h4 style={{color:'grey'}}>Front-End & React Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'100%',}}/>
                        <p>I am a very passionate JavaScript developer. I like to learning new things every day and keeping up with the new technologies.I started as a HTML/CSS developer back in 2013 and since then I'm improving my skills with practice as much as I can.
I am also a man of strong morals and principles which guides me through life.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'100%' }}/>
                        <h5><b>Address</b></h5>
                        <p>Bagalore - 560037 Karnataka</p>
                        <h5><b>Phone</b></h5>
                        <p>+91-9543302263</p>
                        <h5><b>Email</b></h5>
                        <p>sasikumar.sinu@gmail.com</p>
                        <h5><b>Website</b></h5>
                        <p>https://seenu1688.github.io</p>
                    </Cell>
                    </Grid>
            </div>
            
        )
    }
}

export default Aboutme;

