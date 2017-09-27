import React from "react";

const UserAdd = (props) => (
    <form onSubmit={submitHandler.bind(props)}>
        <input name="name" placeholder="type user name" required/>
        <br/>
        <input name="surname" placeholder="type user surname" required/>
        <br/>
        <input type="submit" value="Add user" />
    </form>
);

function submitHandler(e) {
    e.preventDefault();

    const inputName = e.target.querySelector('input[name="name"]');
    const inputSurname = e.target.querySelector('input[name="surname"]');

    this.add({
        name: inputName.value,
        surname: inputSurname.value
    });

    inputName.value = "";
    inputSurname.value = "";
};

export default UserAdd;