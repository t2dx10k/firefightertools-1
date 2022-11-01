import useTool from "../hooks/useTool";
import {Link} from "react-router-dom";

export default function MainPage() {

    const {tool, deleteTool} = useTool();

    return (
        <>
            <div className={"MainPage"}>
                <h1>Test MainPage</h1>
                <form>
                    <Link to="/toolpage/">
                        <button type="button">Tools</button>
                    </Link>

                    <Link to={"/quizpage/"}>
                        <button type="button">Quiz</button>
                    </Link>

                    <Link to={"/loginpage"}>
                        <button type="button">Login</button>
                    </Link>
                </form>
            </div>
        </>
    )
}