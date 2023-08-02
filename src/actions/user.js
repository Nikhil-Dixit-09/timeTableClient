import * as api from '../api/index';
export const addEntry=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.addEntry(formData);
        // console.log(data.data);
        // console.log(data);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(error){
        console.log(error)
    }
}
export const getInfo=(email)=>async(dispatch)=>{
    try{
        // console.log(formData);
        const {data}=await api.getInfo(email);
        // console.log(data.data);
        // console.log(data);
        if(data.message==="session expired"){
            dispatch({type:'LOGOUT'});
        }else{
            dispatch({type:'SET_USER',payload:data.data});
        }
        
    }catch(error){
        console.log(error)
    }
}
export const delEntry=(entryId)=>async(dispatch)=>{
    try{
        const {data}=await api.delEntry(entryId);
        // console.log(data);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(err){
        console.log(err);
    }
}
export const addFixed=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.addFixed(formData);
        console.log(data);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(err){
        console.log(err);
    }
}
export const delFixed=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.delFixed(formData);
        // console.log(data);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(err){
        console.log(err);
    }
}
export const addPairing=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.addPairing(formData);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(err){
        console.log(err);
    }
}
export const delPairing=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.delPairing(formData);
        // console.log(data);
        dispatch({type:'SET_USER',payload:data.data});
    }catch(err){
        console.log(err);
    }
}