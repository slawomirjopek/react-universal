import React, { Component } from "react";

import UserAdd from "../components/user/UserAdd";
import UserList from "../components/user/UserList";

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [
                { name: "John", surname: "Malkowsky" },
                { name: "Jane", surname: "Smith" }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>User list</h2>
                <UserList users={this.state.users}/>
                <h3>Add user</h3>
                <UserAdd add={this.userAdd.bind(this)}/>
            </div>
        )
    }

    userAdd(user) {
        const updatedUsers = this.state.users.push(user);
        this.setState({updatedUsers});
    }
};

export default Users;
