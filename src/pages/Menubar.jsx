import React from "react";
import { Link } from "react-router-dom";

const ManuBar=()=>{
    return(
        <div>
            <div className="w-full bg-black py-3">
                <div className=" container flex justify-between items-center"> 

<div><h4>Note App</h4></div>
<div>
    <Link to="/" className=" text-white font-mono font-bold text-lg px-5">Home</Link>
</div>
<div>
    <Link to="/notes" className=" text-white font-mono font-bold text-lg px-5">Notes</Link>
</div>
<div>
    <Link to="/" className=" text-white font-mono font-bold text-lg px-5">Contact</Link>
</div>



                </div>

            </div>

        </div>
    )
}

export default ManuBar;