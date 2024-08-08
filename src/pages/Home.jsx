import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addNote} from "../redux/noteSlice"
import{ToastContainer,toast} from"react-toastify"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "react-toastify/dist/ReactToastify.css";
import ManuBar from "./Menubar";
const Home=()=>{
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
      setIsChecked(event.target.checked);
    };
const dispatch=useDispatch();
const handleAddNote=(e)=>{
    e.preventDefault();
    if(title !== '' && desc!=""){
 
        const newNote={
            id:new Date().toString(32),
            title,
            description:desc,
            createdAt:new Date().toString()
 
        }
        setTitle('')
        setDesc('')
        setIsChecked(false)
        dispatch(addNote(newNote))
 
        toast.success("Note Add Succesfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });

    }
    else{
toast.error("Fill Up All",{
    position:"top-right",
    autoClose:2000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:false,
    draggable:true,
    theme:"colored"
})

}


}    

return(
    <>

<Helmet>
    <title>Home</title>
</Helmet>
<ToastContainer/>

    <ManuBar/>

    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/4 bg-white shadow-md rounded-md px-4 py-5 box-border">
        <div>
            <h1 className="font-mono text-3xl text-black text-center mb-4">
                ADD NOTES           
                
                 </h1>

                <input type="text" 
                 placeholder="titile"
                 className="w-full rounded-md border border-blue-300 p-2 outline-none"
                 onChange={(e)=>{setTitle(e.target.value)}}
                 value={title}
                
                /> 
                <textarea value={desc} rows={5} maxLength={400} 
                className="w-full rounded-md border  border-blue-300  p-2 mt-3 outline-none resize-none " 
                onChange={(e)=>setDesc(e.target.value)}></textarea>
        
                <p className="w-full font-serif">Sure! You want to create a Note</p>
      <input type="checkbox" checked={isChecked} onChange={handleChange} 
 className="absolate top-0 right-3  w-5 h-5  text-sky-600 bg-slate-800 flex items-center justify-center "                      />
 <p className="text-base font-bold text-sky-500">Remaining:{400 - desc.length}</p>
               

                <button onClick={handleAddNote} disabled={!isChecked} className="bg-sky-700 text-white text-base font-mono px-5 py-2 rounded-md mt-3">Save Note</button>
        </div>

        </div>

    </div>

       
    
    </>
)
}

export default Home;
