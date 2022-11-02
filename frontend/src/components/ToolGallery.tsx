import {Tool} from "../model/Tool";
import {useState} from "react";
import ToolCard from "./ToolCard";

type ToolGalleryProps = {
    tools: Tool[]
}


export default function ToolGallery(props: ToolGalleryProps) {

    const [search, setSearch] = useState("");
    const filteredTools = props.tools.filter((tool) => tool.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <>

            <form>
                <input className={"search-input"} type={"text"} placeholder={"Search"} onChange={(event) => setSearch(event.target.value)}/>
            </form>

            <div className={"tools"}>
                {filteredTools.map((tool) =>
                <>
                    <ToolCard tool={tool}/>
                </>
                )}
            </div>

        </>

    )
}
