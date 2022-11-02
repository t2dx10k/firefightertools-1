import {Tool} from "../model/Tool";
import ToolGallery from "../components/ToolGallery";

type ToolsProps = {
    tools: Tool[]
}

export default function ToolPage(props: ToolsProps) {

    return (
        <>
            <div className={"ToolPage"}>
                <h1>Test ToolPage</h1>
                <ToolGallery tools={props.tools}/>
                <form>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}