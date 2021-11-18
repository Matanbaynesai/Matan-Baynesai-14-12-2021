

export const AddWeather = (obj)=>{
  return { 
    type:"ADD_WEATHER",
  payload:{
    ...obj
  }
}}
  
export const DeleteWeather = ()=>{
   return {
     type:"DELETE_WEATHER",
    payload:{
      id:1
    }
  }} 