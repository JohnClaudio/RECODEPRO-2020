const title = [
    { 
        texto:"Oh yeah,all right. Somebody's Heineken is crowdin' my icebox  somebody's cold one is givin' me chills Guess I'll just close my eyes"
       
    },
    { 
        texto:"Se é isso que você quer, você pode tê-lo Mas você tem que aprender a chegar lá e agarra-lo Porque todos querem um pouco de amor Atirando nas estrelas do céu e apesar de que meu coração irá quebrar Existe mais do que eu posso ter Eu nunca terei o suficiente"
    },
    { 
       texto:"If you want to destroy my sweater Hold this thread as I walk away Watch me unravel, I'll soon be naked Lying on the floor (lying on the floor) I've come undone If you want to destroy my sweater Hold this thread as I walk away (as I walk away) Watch me unravel, I'll soon be naked Lying on the floor (lying on the floor) I've come undone"
    },
    {
        texto:"  Weezer é uma banda americana de rock alternativo de Los Angeles, Califórnia, formada em 1992. A banda é constituída por Rivers Cuomo (vocalista e guitarra), Patrick Wilson (bateria, guitarra e voz de apoio), Brian Bell (guitarra, voz de apoio e teclado) e Scott Shriner (baixo, voz de apoio e teclado). A formação da banda alterou quatro vezes desde a sua criação em 1992.[1] Eles lançaram doze álbuns de longa duração, seis EPs e um DVD"
    }


]

export default function textos (state, action){
    switch(action.type){
        
        case 'TEXTO_CARD_ALTERADO':
            return { 
                ...state, 
                texto: title[action.payload].texto,
            
            };
        default:
            return {
                texto: "We Are Weezer",
       
            }
    }
    return state;
}