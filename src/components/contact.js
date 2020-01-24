import React, { Component } from "react";
import { Grid, Cell,List,ListItemContent,ListItem } from "react-mdl";

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>SASIKUMAR SRINIVASAN</h2>
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                            alt="avatar"
                            style={{height:"250px"}}
                        />
                        <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>I am a very passionate JavaScript developer. I like to learning new things every day and keeping up with the new technologies.I started as a HTML/CSS developer back in 2013 and since then I'm improving my skills with practice as much as I can.
I am also a man of strong morals and principles which guides me through life.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>  
                        <div className="contact-list">

                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-birthday-cake" aria-hidden="true"/>
                                     21 March 1995</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                     +91-9543302263</ListItemContent>
                            </ListItem>


                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                     +91-9543302263</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                     sasikumar.sinu@gmail.com</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                     sasikumar1688</ListItemContent>
                            </ListItem>
                            </List> 
                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;

