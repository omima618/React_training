import styles from "./Form.module.css";
import Button from "../UI/Buttons/Button";
import { useState } from "react";
const Form = (props) => {
    const emptyInputsMessage =
        "Please enter a valid name and age (non-empty values).";
    const minusAgeMessage = "Age isn't valid, it should be > 0";

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const newUser = (userData) => {
        props.addUser(userData);
    };

    const renderUser = (e) => {
        e.preventDefault();
        if (userName.length === 0 || userAge.length === 0) {
            props.errorModal(true);
            props.showMessage("Invalid input", emptyInputsMessage);
            return;
        }
        if (+userAge < 1) {
            props.errorModal(true);
            props.showMessage("Invalid age", minusAgeMessage);
            return;
        }
        const userData = {
            username: userName,
            age: userAge,
            id: `${Math.random()}`,
        };
        newUser(userData);
        setUserName("");
        setUserAge("");
    };

    const getName = (e) => {
        setUserName(e.target.value);
    };

    const getAge = (e) => {
        setUserAge(e.target.value);
    };

    return (
        <form className={styles.form} onSubmit={renderUser}>
            <div className={styles.wrapper}>
                <label htmlFor="user">Username</label>
                <input
                    id="user"
                    type="text"
                    value={userName}
                    onChange={getName}
                />
            </div>
            <div className={styles.wrapper}>
                <label htmlFor="age">Age(Years)</label>
                <input
                    id="age"
                    type="number"
                    value={userAge}
                    onChange={getAge}
                />
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};
export default Form;
