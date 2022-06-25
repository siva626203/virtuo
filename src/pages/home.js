import { Component, Fragment } from "react";

import Header from '../compoment/header'
import { Route, Routes } from "react-router-dom";
import Login from './login'
class Home extends Component{
    render(){
        return <Fragment>
            <Header />
            <Routes>
                <Route path="" />
                <Route path="login" element={<Login />}/> 
            </Routes>
        </Fragment>
    }
}
export default Home;