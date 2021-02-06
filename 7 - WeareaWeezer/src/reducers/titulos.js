const title = [
    { 
        lancamento: "Data de lançamento: 1992",
        titulo:"weezer say it ain't so" 
       
    },
    { 
        titulo:"Photograph",
        lancamento: "Data de lançamento: 2001"
    },
    { 
        titulo:"Undone (The Sweater Song)",
        lancamento: "Data de lançamento: 2003"
    }


]

export default function titulos (state, action){
    switch(action.type){
        
        case 'TITULO_MUSICA_ALTERADA':
            return { 
                ...state, 
                titulo: title[action.payload].titulo,
                lancamento: title[action.payload].lancamento
            };
        default:
            return {
                titulo: title[0].titulo,
                lancamento: title[0].lancamento
            }
    }
    return state;
}