import React from 'react';
import AddForm from '../../add-form/AddForm';
import TopFold from '../../topfold/TopFold';
import "./AddExpense.css";

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <TopFold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense;
