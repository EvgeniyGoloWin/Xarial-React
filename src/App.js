import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import Header from "./components/header/header";

import './App.css';


function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
