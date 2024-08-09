import { useState } from "react";

function Component() {
    const [isDark,setIsDark]= useState(true)
    return(
        <div>
            <button onClick={()=>{
                setIsDark(!isDark)
            }}>{isDark ? "Dark" : "Light"}</button>
        </div>
    );
}
export default Component