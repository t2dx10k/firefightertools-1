import {Tool} from "../model/Tool";

type ToolsProps = {
    tool: Tool
}

export default function DetailPage(props: ToolsProps) {

    return (
        <>
            <div className={"detailPage"}>
                <h1>Test DetailPage</h1>
                <h6>{props.tool.name}</h6>
                <h6>{props.tool.img}</h6>
                <h6>{props.tool.description}</h6>
                <h6>{props.tool.link}</h6>
                <form>
                    <button>Edit</button>
                </form>
            </div>
        </>
    )
}