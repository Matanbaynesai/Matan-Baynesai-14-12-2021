

export const AddWeather = (obj)=>{
  return { 
    type:"ADD_WEATHER",
  payload:{
    ...obj
  }
}}
  
export const DeleteWeather = (key)=>{
   return {
     type:"DELETE_WEATHER",
    payload:{
      key:key
    }
  }} 