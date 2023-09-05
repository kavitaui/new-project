import { useContext } from "react";
import MyContext from "./Context";

export default function Component() {
   const contextData = useContext(MyContext);
    return (
        <div>
            hello {JSON.stringify(contextData)}
        <p>{JSON.stringify(contextData[0])}</p>
        {contextData[0].content}
        </div>
    )

}