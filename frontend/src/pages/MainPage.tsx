import {Tool} from "../model/Tool";
import ToolGallery from "../components/ToolGallery";

type ToolsProps = {
    tools: Tool[]
}

export default function MainPage(props: ToolsProps) {

    return (
        <>
            <h1>Test MainPage</h1>
            <form>
                <button></button>
            </form>
            <ToolGallery tools={props.tools}/>
        </>
    )

}