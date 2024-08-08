import {createSlice} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState={
    notes:[]
};

const savesNotes=JSON.parse(localStorage.getItem("note"));

if(savesNotes){
    initialState.notes=savesNotes;
}


const noteSlice=createSlice({
    name:"note",
    initialState,  
    reducers:{
        addNote:(state,action)=>{
            state.notes=[...state.notes, action.payload];
            localStorage.setItem("note",JSON.stringify(state.notes))

        },
        deleteNote:(state,action)=>{
            state.notes=state.notes.filter((note)=>note.id != action.payload   )
            localStorage.setItem("note",JSON.stringify(state.notes))
 
        },
        updateNote:(state,action)=>{
            const {id,title,description,createdAt}=action.payload;
            const note = state.notes.find((note)=>note.id==id);
            if(note){
                note.title=title,
                note.description=description,
                note.createdAt=createdAt
            }
            localStorage.setItem("note",JSON.stringify(state.notes))


        },
    }
})

export default noteSlice.reducer;
export const{addNote,deleteNote,updateNote}=noteSlice.actions;