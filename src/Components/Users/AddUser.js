import styles from "./AddUser.module.css";
const AddUser = (props) => {
    return (
        <div className={styles.user}>
            <span className={styles.name}>{props.userName}:</span>
            <span className={styles.age}>{props.userAge} Years old</span>
        </div>
    );
};
export default AddUser;
