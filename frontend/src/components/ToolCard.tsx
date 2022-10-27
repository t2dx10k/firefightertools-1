import {Tool} from "../model/Tool";

type ToolCardProps = {
    tool: Tool;
}

export default function ToolCard(props: ToolCardProps) {



    return (

        <div className={"toolCard"}>

            <p><h6>{props.tool.name}</h6></p>
            <p><h6>{props.tool.img}</h6></p>
            <p><h6>{props.tool.description}</h6></p>
            <p><h6>{props.tool.link}</h6></p>

        </div>

    )
}
