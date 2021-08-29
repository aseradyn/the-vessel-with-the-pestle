import TopBar from './components/layout/topBar';
import { BottomBar } from './components/layout/bottomBar';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from '@emotion/styled';
import GlobalStyles from './globalStyles';
import Routes from './routes';

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Page>
        <div>
          <TopBar />
          <Routes />
        </div>
        <BottomBar />
      </Page>
    </Router>
    </>
  );
}

export default App;

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 5em;
`