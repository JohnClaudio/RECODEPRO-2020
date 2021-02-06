import { createStore, combineReducers } from 'redux'; 


export const Reducers = combineReducers({

    nomes: function(state, action){
        console.log(state, action)
        return {
            arquivo: 'joao',
            min: 5555
        }
    },

    letras: function(state, action){
        switch(action.type){

            case 'LETRA_MUSICA_ALTERADA':

                return { 
                    ...state, 
                    letra: action.payload
                };
            default:
                return {
                    letra: 'Weezer Photograp of Love'
                }
        }
    
    },

    titulos: function(state, action){
        switch(action.type){
            
            case 'TITULO_MUSICA_ALTERADA':

                return { 
                    ...state, 
                    titulo: action.payload
                };
            default:
                return {
                    titulo: 'titulo weezer'
                }
        }
    
    }
})

function storeConfig(){
    return createStore(Reducers)
}

export default storeConfig