/* eslint-disable no-unused-vars */
import "./App.css";
import Container from "./Components/UI/Container/Container";
import Form from "./Components/Form/Form";
import Users from "./Components/Users/Users";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";
const users = [];
function App() {
    const [updatedUsers, setUpdatedUsers] = useState(users);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const updateUser = (userData) => {
        setUpdatedUsers((previousState) => {
            return [...previousState, userData];
        });
    };

    const controlModal = (status) => {
        setShowModal(status);
    };
    const modalContent = (title, message) => {
        setModalTitle(title);
        setModalMessage(message);
    };

    return (
        <Container>
            <Form
                addUser={updateUser}
                errorModal={controlModal}
                showMessage={modalContent}
            />
            {updatedUsers.length === 0 ? (
                ""
            ) : (
                <Users usersData={updatedUsers} />
            )}
            {showModal === true ? (
                <Modal
                    title={modalTitle}
                    message={modalMessage}
                    hideModal={controlModal}
                />
            ) : (
                ""
            )}
        </Container>
    );
}

export default App;
