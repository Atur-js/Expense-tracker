import React from "react";
import ExpenseList from "../../expense-list/ExpenseList";
import TopFold from "../../topfold/TopFold";
import "./home.css";

const Home =() => {
    return (
        <div className="home">
            <TopFold/>
            <ExpenseList/>
        </div>
    )
}

export default Home;