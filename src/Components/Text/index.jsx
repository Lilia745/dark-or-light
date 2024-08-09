import { useContext, useState } from "react";
import { ThemContext } from "../../App";

function Text() {
    const theme = useContext(ThemContext);
    const [isDark,setIsDark]= useState(true)
    return(
        <div className="box"> 
            <h1 style={{color : isDark ? "black" : "white"}}>Welcome</h1>
            <p style={{color : isDark ? "white" : "black"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, sapiente quo consequatur, in repellat error alias corporis sequi officia totam assumenda. Nihil excepturi est, perspiciatis deserunt provident ratione veniam repudiandae.</p>
        </div>
    );
}
export default Text