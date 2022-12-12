import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import './App.css';
import Header from "./components/header/header";


function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
