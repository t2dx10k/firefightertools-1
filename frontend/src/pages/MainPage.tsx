import {Tool} from "../model/Tool";

type ToolsProps = {
    tools: Tool[]
}

export default function MainPage(props: ToolsProps) {

    return (
        <>
            <div className={"MainPage"}>
                <h1>Test MainPage</h1>
                <form>
                    <button>Tools</button>
                    <button>Quiz</button>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}