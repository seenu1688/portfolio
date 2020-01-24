import React, { Component } from "react";
import { Tabs, Tab, Cell,Grid,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton } from "react-mdl";

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab:0 };
    }
    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1) center / cover'}}>HTML/CSS Project #1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>CodePen</Button>
                 </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1) center / cover'}}>HTML/CSS Project #2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>CodePen</Button>
                 </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                {/* Project 1 */}
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1) center / cover'}}>HTML/CSS Project #3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>CodePen</Button>
                 </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                </div>
            
            )
        }else if (this.state.activeTab === 1) {
            return(
                <div><h1>HTML/CSS</h1></div>
            )
        }else if (this.state.activeTab === 2) {
            return(
                <div><h1>JAVASCRIPT</h1></div>
            )
        }else if (this.state.activeTab === 3) {
            return(
                <div><h1>REACT</h1></div>
            )
        }else if (this.state.activeTab === 4) {
            return(
                <div><h1>JSON</h1></div>
            )
        }

    }
        
    render(){
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>PHOTOSHOP</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>REACT</Tab>
                    <Tab>JSON</Tab>
                </Tabs>
                <section  className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
                
            </div>
        )
    }
}

export default Projects;

