import { useContext } from "react";
import context from "./Context";

export default function componant(){
    const contextData = useContext(context);
return(
  <div>{contextData.myData.heading}</div>
)

}