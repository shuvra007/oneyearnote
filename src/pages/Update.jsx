import React,{useState  } from "react"
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNote } from "../redux/noteSlice";
import{ToastContainer,toast} from"react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Update=({setVisible,editedTitle,visible,editedDesc,setEditedDesc,setEditedTitle ,editedId})=>{
    const dispatch= useDispatch()
    const handleEdit=()=>{
         
        const updated={
            id:editedId,
            title:editedTitle,
            description:editedDesc,
            createdAt:new Date().toString()

        }          

        dispatch(updateNote(updated))
        visible &&(
            toast.success("Updated Succesfully", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                })
        )
        setTimeout(()=>{
            setVisible(false)

        },500)


    }
    return(
        <div className="w-full bg-gray-900 fixed top-0 left-0 h-screen flex justify-center items-center ">

<div className="w-1/3 bg-slate-300 shadow-md rounded-md ">

<div>
    <div className="relative">
            <h1 className="font-mono text-3xl text-black text-center mb-4">
                Update NOTES           
                 
                 </h1>
                 <div className="absolate top-0 right-3  w-9 h-9 rounded-full text-sky-600 bg-slate-800 flex items-center justify-center cursor-pointer
                 " onClick={()=>setVisible(false)}>
                 <RxCross2 /> 

                 </div>
    </div> 

                <input type="text" 
                 placeholder="titile"
                 className="w-full rounded-md border border-blue-300 p-2 outline-none"
             value={editedTitle}
             onChange={(e)=>setEditedTitle(e.target.value)}
                
                /> 
                <textarea  rows={5} maxLength={400} 
                className="w-full rounded-md border  border-blue-300  p-2 mt-3 outline-none resize-none " 
                value={editedDesc}
                onChange={(e)=>setEditedDesc(e.target.value)}

                ></textarea>

                <button  className="bg-sky-700 text-white text-base font-mono px-5 py-2 rounded-md mb-1 ml-1 mt-3" onClick={handleEdit}>Update Note</button>
        </div>


 </div>
 <ToastContainer/>


        </div>
    )

}
export default Update