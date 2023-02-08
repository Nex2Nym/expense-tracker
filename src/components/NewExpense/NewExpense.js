import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState ("");

    const changeShowForm = () => (
        setShowForm (prevState => {
            return !prevState;
        })
    )

    if (!showForm) {
        return (
            <div className="new-expense">
                <button type="button" onClick={changeShowForm}>Add New Expense</button>
            </div>
        )
    }

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onHideForm={changeShowForm} />
        </div>
    )
}

export default NewExpense