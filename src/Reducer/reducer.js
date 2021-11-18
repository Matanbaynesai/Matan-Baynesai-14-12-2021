
export default function reducer(state = [],action){
    switch(action.type){
        case "ADD_WEATHER":
            return [...state,{
                city:action.payload.city,
                temp:action.payload.temp,
                key:action.payload.key,
                img:action.payload.img
            }]
        case "DELETE_WEATHER":
            return state.filter(item => item.key !== action.payload.key);

        default:
            return state;
    }
}