import styles from "./Modal.module.css";
import Button from "../Buttons/Button";
const Modal = (props) => {
    const clickHandler = () => {
        props.hideModal(false);
    };
    const hideModalHandler = () => {
        props.hideModal(false);
    };
    return (
        <div className={styles.modal}>
        <div className={styles.backdrop} onClick={hideModalHandler}></div>
                <div className={styles.message}>
                    <h2>{props.title}</h2>
                    <p>{props.message}</p>
                    <Button onClick={clickHandler}>Okay</Button>
                </div>
            
        </div>
    );
};
export default Modal;
