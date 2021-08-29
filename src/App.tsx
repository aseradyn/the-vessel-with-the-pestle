import {useContext} from 'react';
import TopBar from './components/layout/topBar';
import { BottomBar } from './components/layout/bottomBar';
import { Global, css } from '@emotion/react';
import {ThemeContext} from './components/theme/themeContext';
import {Home} from './components/home/homePage';
import {About} from './components/about/aboutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from '@emotion/styled';
import { Professional } from './components/professional/professionalPage';
import { Personal } from './components/personal/personalPage';
import { Hobbies } from './components/hobbies/hobbiesPage';

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 5em;
`

function App() {

  const {colors, useDarkMode} = useContext(ThemeContext);

  return (
    <>
    <Global styles={css`
      body {
        color: ${useDarkMode ? colors.gray[200] : colors.gray[900]};
        background-color: ${useDarkMode ? colors.gray[700] : colors.primary[200]};
        padding: 0px;
        margin: 0px;
        font-family: Inter, Arial, sans-serif;
        font-size: 14px;
      }
      a, a:active, a:visited {
        color: ${useDarkMode ? colors.secondary[500] : colors.secondary[700]};
        text-underline-position: under;
      }
    `} />
    <Router>
      <Page>
        <div>
          <TopBar />
              <Switch>
                <Route path="/about"><About /></Route>
                <Route path="/professional"><Professional /></Route>
                <Route path="/personal"><Personal /></Route>
                <Route path="/hobbies"><Hobbies /></Route>
                <Route path="/"><Home /></Route>
              </Switch>
        </div>
        <BottomBar />
      </Page>
    </Router>
      
    </>
  );
}

export default App;
