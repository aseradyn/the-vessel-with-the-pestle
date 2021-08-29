import {useContext} from 'react';
import {ThemeContext} from '../theme/themeContext';
import styled from '@emotion/styled';
import { Card } from '../legos/card';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';
import BeachAccessTwoToneIcon from '@material-ui/icons/BeachAccessTwoTone';
import MouseTwoToneIcon from '@material-ui/icons/MouseTwoTone';
import { Link } from 'react-router-dom';

type StyleProps = {
    backgroundColor: string
  }
  
  type MyContainerProps = {
    customStyles: StyleProps
  }
  
  const MyContainer = styled.div<MyContainerProps>`
    width: 100%;
    display: grid;
    justify-items: center;
    padding-top: 20px;
    width: 100%;
  `

  const Section = styled.div`
    margin-top: 50px;
    display: grid;
    justify-items: center;
  `

  const SubjectGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    gap: 20px;
    padding: 20px;

    @media only screen and (max-width: 950px) {
        grid-template-columns: auto;
    }
  `

  const SubjectCard = styled(Card)`
    display: grid;
    grid-template-rows: auto auto;
  `

 

  const SubjectLink = styled.div`
    align-self: end;
    display: grid;
    grid-template-columns: 2em auto;
    align-items: center;
  `

const Home = () => {

    const {colors, useDarkMode} = useContext(ThemeContext);

    const SubjectDescription = styled.div`
    align-self: start;

    & img {
      width: 100%;
      border: 1px solid ${useDarkMode ? colors.primary[600] : colors.primary[200]};
      margin-bottom: 20px;
    }
  `

    const MyContainerStyleProps = {
        backgroundColor: useDarkMode ? colors.gray[700] : colors.primary[200]
    }

    return (
        <MyContainer customStyles={MyContainerStyleProps}>
            <span style={{color: useDarkMode ? colors.accent[500] : colors.accent[700], fontSize: "1.1em", fontWeight: "bolder", letterSpacing: "1px"}}>
                Welcome!
            </span> I'm so glad you're here!
            <Section>
            <span>What can I interest you in?</span>
                <SubjectGroup>
                    <SubjectCard>
                        <SubjectDescription>
                        My <b>professional</b> experience?
                        <p>Including:</p>
                        <ul>
                            <li>User experience and interface design</li>
                            <li>Web development (focus on UI)</li>
                            <li>Technical communication</li>
                        </ul>
                        </SubjectDescription>
                        <SubjectLink>
                        <MouseTwoToneIcon /> <Link to="/professional" title="Go to Professional">Click this way</Link>
                        </SubjectLink>
                    </SubjectCard>
                    <SubjectCard>

                      <SubjectDescription>
                            
                            
                              My <b>personal</b> life? 
                              <p>Such as:</p>
                                <ul>
                                    <li>Travel</li>
                                    <li>Pets</li>
                                    <li>Beloved books and media</li>
                                </ul>
                            </SubjectDescription>
                            <SubjectLink>
                                <BeachAccessTwoToneIcon /> <Link to="/personal" title="Go to Personal">Let's hang out</Link>
                            </SubjectLink>
                    </SubjectCard>
                    <SubjectCard>
                        <SubjectDescription>
                        
                        My endless <b>hobbies</b>? 
                        <p>Especially:</p>
                        <ul>
                            <li>Spinning yarn</li>
                            <li>Weaving cloth</li>
                            <li>Growing flowers</li>
                            <li>Pointing my camera at things</li>
                        </ul>
                        </SubjectDescription>
                        <SubjectLink>
                        <AirportShuttleTwoToneIcon /> <Link to="/hobbies" title="Go to Hobbies">Follow me down the rabbit hole</Link></SubjectLink>
                    </SubjectCard>
                </SubjectGroup>
            </Section>
        </MyContainer>
    )
}

export default Home;