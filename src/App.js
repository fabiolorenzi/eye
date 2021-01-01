import React from "react";
import { Switch, Route } from "react-router-dom";

import SocialCard from "./components/SocialCard.jsx";

function App() {
    return(
        <div>
            <Switch>
                <Route path="/" exact component={SocialCard} />
            </Switch>
        </div>
    );
}

export default App;