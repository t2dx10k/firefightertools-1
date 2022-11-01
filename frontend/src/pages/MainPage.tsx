import ToolPage from "./ToolPage";
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
                        <button type="button">
                            Click Me!
                        </button>
                    </Link>
                    <button onClick={(event) => <ToolPage tools={tool}/>}>Tools</button>
                    <button>Quiz</button>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}