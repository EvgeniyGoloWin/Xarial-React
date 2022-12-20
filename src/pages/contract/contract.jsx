import React from 'react';
import Header from "../../components/header/header";
import DragDrop from "../../components/drag&drop/drag&drop";


import './contract.css'

const Contract = () => {
    const getProgress = (status) => {
        switch (status) {
            case "pending":
                return 10;
            case "rejected":
                return 35;
            case "fulfilled":
                return 100;
        }
    }

    const mock = [{
        name: "name",
        status: "status",
    }]

    return (
        <>
            <Header/>
            <div className="wrapper_contract">
                <form className={"form_contract"}>
                        <label className={"label_contract"}>
                            <p>name</p>
                        </label>
                    <div>
                        {/*<label className={"label_contract"}>Status</label>*/}
                        <select className={"input"}>
                            <option>
                            <p>One</p>
                            </option>
                            <option>
                                <p>Two</p>
                            </option>
                            <option>
                                <p>There</p>
                            </option>
                        </select>
                    </div>
                        <DragDrop/>
                        <div>
                            <button className='btn' type="submit">Save</button>
                        </div>
                </form>
            </div>
            {/*<h1 className={"h1"}>My project</h1>*/}
            {/*{mock.map((item, index) => {*/}
            {/*    return <Block key={`${index}`} item={item}/>*/}
            {/*})}*/}
            {}
        </>
    );
};

export default Contract;