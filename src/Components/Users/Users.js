import styles from "./Users.module.css";
import AddUser from "./AddUser";
const Users = (props) => {
    return (
        <div className={styles.users}>
            {props.usersData.map((user) => (
                <AddUser
                    key={user.id}
                    userName={user.username}
                    userAge={user.age}
                />
            ))}
        </div>
    );
};
export default Users;
