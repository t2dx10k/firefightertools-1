import {Tool} from "../model/Tool";
import {Link} from "react-router-dom";

type TCProps = {
    tool: Tool;
}

export default function ToolCard(props: TCProps) {



    return (

        <div className={"toolCard"}>



            <Link to={"/details"}>
                <button><p><h6>{props.tool.name}</h6></p></button>
            </Link>

            <Link to={"/details"}>
                <button><p><h6>{props.tool.img}</h6></p></button>
            </Link>

            <p><h6>{props.tool.description}</h6></p>
            <p><h6>{props.tool.link}</h6></p>

        </div>

    )
}
