import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormPage from "../components/FormPage";
import Header from  "../components/Header";
import ResumePage from "../components/ResumePage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={FormPage} exact={true}></Route>
                <Route path="/resume" component={ResumePage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;

