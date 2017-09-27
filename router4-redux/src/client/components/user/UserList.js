import React from "react";

const UserList = (props) => (
    <ul>
        {createList.bind(props)()}
    </ul>
);

const createList = function() {
    return this.users.map((user, index) => (
        <li key={index}>{user.name}, {user.surname}</li>
    ));
};

export default UserList;