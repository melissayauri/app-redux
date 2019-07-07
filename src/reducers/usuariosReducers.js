import {TRAER_TODOS,CARGANDO, ERROR} from '../types/usersTypes'

const INITIAL_STATE = {
    usuarios:[],
    cargando: false,
    error:' '
}

export default (state = INITIAL_STATE, action) =>{
    // eslint-disable-next-line no-undef
    switch(action.type){
        case TRAER_TODOS:
            // eslint-disable-next-line no-undef
            return{
                ...state, 
                usuarios:action.payload,
                cargando:false
            };
        case CARGANDO:
            return{
                ...state, 
                cargando:true
        }
        case ERROR:
                return{
                    ...state, 
                    error:action.payload,
                    cargando:false
            }
        default: return state;
    
    }
}