import {Tool} from "../model/Tool";

type TCProps = {
    tool: Tool;
}

export default function ToolCard(props: TCProps) {



    return (

        <div className={"toolCard"}>

            <button><p><h6>{props.tool.name}</h6></p></button>
            <button><p><h6>{props.tool.img}</h6></p></button>
            <p><h6>{props.tool.description}</h6></p>
            <p><h6>{props.tool.link}</h6></p>

        </div>

    )
}
