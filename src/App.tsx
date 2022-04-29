import React from 'react';
import './app.scss';
import Header from "./Header";

/**
 *   You can fetch the intent by importing the fetchIntent function
 *   from the data module:
 *
 *   import {fetchIntents} from "./data";
 *
 *   and call `fetchIntents()` from anywhere in the application to get
 *   the intents and render them in a list.
 */

function App() {
    return (
        <div className="App">
            <Header />

            {/* Add more code here to show a list of the intents */}

        </div>
    );
}

export default App;
