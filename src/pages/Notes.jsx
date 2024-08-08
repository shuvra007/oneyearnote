import React, { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from "react-redux";
import { formatDistance, subDays } from "date-fns";
import { deleteNote } from "../redux/noteSlice";
import ManuBar from "./Menubar";
import Update from "./Update";
const Notes=()=>{
    const[next,setNext]=useState(3);
    const[visible,setVisible]=useState(false);
    const[editedTitle,setEditedTitle]=useState('');
    const[editedDesc,setEditedDesc]=useState('');
    const[editedId ,setEditedId]=useState('');





const {notes}=useSelector((state)=>state.note)
const dispatch=useDispatch();

const handleDelete=(id)=>{
    dispatch(deleteNote(id)) 

} 
const handleUpdate=(note)=>{
setVisible(true)
setEditedTitle(note.title)
setEditedDesc(note.description)
setEditedId(note.id)


}

if(visible){
    return<Update setVisible={setVisible} editedTitle={editedTitle} 
    editedDesc={editedDesc} setEditedDesc={setEditedDesc} setEditedTitle={setEditedTitle}
    editedId={editedId} visible={visible}

    /> 
}
const loadmore=()=>{
    setNext((prev)=>prev+3)

}
    return(
        <>
            <Helmet>
    <title>Notes</title>
</Helmet>
<ManuBar/>

    <div className="grid grid-cols-3 gap-3 mt-5  ">
{
    notes?.slice(0,next).map((note)=>(  

        <div className="shadow-sm bg-white  rounded-md border border-slate-200  px-4 py-3 ml-1" key={note.id }>

            <h3 className="font-mono text-xl font-bold">{note.title}</h3>
            <p className="font-sans font-normal text-lg ">{note.description}</p>

<span className=" text-base font-mono text-slate-800 ">{formatDistance(note.createdAt ,new Date(),{ addSuffix: true })}</span>
<div>

</div>
<div className="flex items-center justify-end gap-x-3">
    <button className="px-5 py-2 font-medium rounded-md bg-red-700" onClick={()=>{handleDelete(note.id)}}>Delete</button>
    <button className="px-5 py-2 font-medium rounded-md bg-green-600" onClick={()=>handleUpdate(note)}>Update</button>

</div>
</div>
 
    ))
}





    </div>
    {
        next > 3 && notes.length && (
            <button className="text-center px-4 py-2 bg-cyan-500 text-yellow-200" onClick={loadmore}>Load More</button>

        )
    }





        </>
    )

}

export default  Notes;