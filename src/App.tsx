import './App.css';
import React from "react";
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./routes/router.config.tsx";
import {LoadProgress} from "./components";

const App: React.FC<{}> = () => {
    return <RouterProvider router={routerConfig} fallbackElement={<LoadProgress />} />;
}

export default App;
