import {useEffect, useState} from "react";
import axios from "axios";


export default function useTool() {

    const [tool, setTool] = useState([]);

    useEffect(
        () => {
            getAllTools()
        }
    )

    const getAllTools = () => {
        axios.get("/api/fft")
            .then((response) => {
                return response.data
            })
            .then((tool) => {
                setTool(tool)
            })
            .catch(() => console.error())
    }

    const deleteTool = (id:string) =>{
        axios.delete("/api/fft/" + id)
            .then(getAllTools)
            .catch((error) => console.error(error))
    }

    return {tool, deleteTool}
}