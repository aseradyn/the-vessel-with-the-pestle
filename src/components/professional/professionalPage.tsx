import { Link } from "react-router-dom";
import { Breadcrumbs } from "../layout/breadcrumbs"
import { PageContent } from "../layout/pageContent"
import { Card } from "../legos/card";
import Grid from "./professionalPage_grid";

const Professional = () => {
    return (
        <PageContent>
            <Breadcrumbs currentPageName="Professional" />
            <Card style={{marginLeft: "auto", marginRight: "auto"}}>
                <h1>I Build Tools to Make Life Easier</h1>
                <p>
                    My passion is creating tools that are genuinely useful. Sometimes that's 
                    a suite of software the requires a team of professionals to build out, and 
                    sometimes it's a set of instructions knocked out by a single person in an
                    afternoon.
                </p>
                <Link to="/article">Sample Article</Link>
            </Card>
            <Grid>
            <Card>
            <h2>User Experience</h2>
            <p>My areas of focus in UX are:</p>
            <ul>
                <li>Optimizing workflow and business rules, including discovery of
                    users' existing processes and expectations
                </li>
                <li>Identifying and incorporating users' mental models, including
                    direct user research and usability testing
                </li>
                <li>Creating fast mockups and prototypes to bring teams into alignment</li>
                <li>Defining a clear design language and building tools to help
                    developers easily implement it
                </li>
            </ul>
            <p>
                TL;DR : I care about making it work, not about making it pretty.
            </p>
            </Card>
            <Card>
                <h2>Web Development</h2>
                
                    <ul>
                        <li>Extensive experience with HTML and CSS - I 💙 CSS!</li>
                        <li>Building user experiences with React and Typescript since 2019</li>
                        <li>Worked in front and back end C#, including MVC (Razor pages)
                            and EF/EF Core
                        </li>
                        <li>Once upon a time I was pretty solid with JQuery</li>
                        <li>Learning Azure Devops, including YAML pipelines and
                            infrastructure-as-code using ARM and Bicep
                        </li>
                        <li>Working with Microsoft SQL databases - SQL and the 
                            MS SQL Management Studio
                        </li>
                    </ul>
                
            </Card>
            <Card>
                <h2>Technical Communication</h2>
                <p>
                    I worked for several years as a professional technical writer,
                    creating documentation referenced every day by users, support techs,
                    and my co-workers.
                </p>
                <p>
                    While that's no longer on my list of job duties, it is still something
                    I believe in. I continue to produce:
                   
                </p> 
                <ul>
                        <li>documentation to help onboard new team members</li>
                        <li>articles to teach new skills to my fellow developers</li>
                        <li>record important information in an accessible way</li>
                        <li>best practices and style guidelines</li>
                        <li>error messages, emails, and on-screen text for our software</li>
                    </ul>
            </Card>
            <Card>
                <h2>And other stuff...</h2>
                <p>
                    Y'all, I just love creating tools, no matter what materials
                    are laying around.
                    
                </p><ul>
                        
                        <li>Packages of shared React components to speed up development
                            of common interfaces (<em>not</em> a solo effort! I worked 
                            with a team on this)
                        </li>
                        <li>Interactive release checklist built in Excel</li>
                        <li>Batch scripts to simplify repeated tasks</li>
                        <li>Custom endpoints to query public APIs, consumed from
                            Kustom (KWGT) Android widgets
                        </li>
                        <li>Building, rebuilding, and tinkering with my personal web site 😇</li>
                    </ul>
            </Card>
            </Grid>
            
        </PageContent>
    )
}

export default Professional;