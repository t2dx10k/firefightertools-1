import {Tool} from "../model/Tool";
import ToolGallery from "../components/ToolGallery";

type TPProps = {
    tools: Tool[]
}

export default function ToolPage(props: TPProps) {

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