import Home from "../containers/Home";
import Users from "../containers/Users";

export default {
    routes: [
        {
            path: "/",
            component: Home,
            exact: true
        },
        {
            path: "/users",
            component: Users,
            exact: true
        }
    ]
}