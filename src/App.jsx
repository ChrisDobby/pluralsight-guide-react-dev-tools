import React, { Suspense } from "react";
import "./App.css";
import { AppContextProvider } from "./appContext";
import Selectors from "./Selectors";
import Total from "./Total";

function App() {
    return (
        <AppContextProvider>
            <Suspense fallback={<div>This is a suspense fallback</div>}>
                <Selectors />
                <Total />
            </Suspense>
        </AppContextProvider>
    );
}

export default App;
