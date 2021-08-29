import {
    Switch,
    Route
  } from 'react-router-dom';

import Home from './components/home/homePage';
import Professional from './components/professional/professionalPage';
import { Personal } from './components/personal/personalPage';
import { Hobbies } from './components/hobbies/hobbiesPage';
import { Credits } from './components/credits/creditsPage';

const Routes = () => {
    return (
        <Switch>
            <Route path="/professional"><Professional /></Route>
            <Route path="/personal"><Personal /></Route>
            <Route path="/hobbies"><Hobbies /></Route>
            <Route path="/credits"><Credits /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    )
}

export default Routes;