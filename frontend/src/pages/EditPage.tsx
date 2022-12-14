import {Tool} from "../model/Tool";

type ToolsProps = {
    tool: Tool
}

export default function EditPage(props: ToolsProps) {

    return (
        <>
            <div className={"editPage"}>
                <h1>Test EditPage</h1>
                <form>
                    <input type={"text"} placeholder={props.tool.name}/>
                    <input type={"text"} placeholder={props.tool.img}/>
                    <input type={"text"} placeholder={props.tool.description}/>
                    <input type={"text"} placeholder={props.tool.video}/>
                    <input type={"text"} placeholder={props.tool.link}/>
                    <input type={"text"} placeholder={props.tool.quizQuestion}/>
                    <input type={"text"} placeholder={props.tool.choiceA}/>
                    <input type={"text"} placeholder={props.tool.choiceB}/>
                    <input type={"text"} placeholder={props.tool.choiceC}/>
                    <input type={"text"} placeholder={props.tool.correctChoice}/>
                    <input type={"text"} placeholder={props.tool.incorrectChoice}/>
                    <button>Save</button>
                </form>
            </div>
        </>
    )
}