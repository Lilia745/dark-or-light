import { useContext, useState } from "react";
import { ThemContext } from "../../App";
import Text from "../Text";

function Component() {
    const theme = useContext(ThemContext)
    const [isDark,setIsDark]= useState(true)
    return(
            <div className="root" style={{background: isDark ? "White" : "Black", color: isDark ? "black" : "white" }}>
                <button  style={{background:isDark?"black":"white",color:isDark?"white":"black"}}
                onClick={()=>{
                    setIsDark(!isDark)
                }}>
                    {isDark ? "Dark" : "Light"}
                </button>
                <Text/>
                <Text/>
            </div>
    );
}
export default Component