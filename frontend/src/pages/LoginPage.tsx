import {Link} from "react-router-dom";

export default function LoginPage() {

    return (
        <>
            <h1>Test LoginPage</h1>
            <button>Log In</button>
            <Link to={"/register"}>
                <button type="button">Sign In</button>
            </Link>
        </>
    )
}