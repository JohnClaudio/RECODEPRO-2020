const musicas = [
    { 
        descricao:"Weezer Say It Ain't So.",
        video:"https://www.youtube.com/embed/zo-x4PU8S6g"
       
    },
    { 
        descricao:"Weezer Photograph",
        video:"https://www.youtube.com/embed/5q4K8BOURQg"
    },
    { 
        id:1, 
        descricao:"Weezer Undone",
       // descricao:" If you want to destroy my sweater Hold this thread as I walk away Watch me unravel, I'll soon be naked Lying on the floor (lying on the floor) I've come undone If you want to destroy my sweater Hold this thread as I walk away (as I walk away) Watch me unravel, I'll soon be naked Lying on the floor (lying on the floor) I've come undone",
        video:"https://www.youtube.com/embed/LHQqqM5sr7g"
    
    }
]

 function letras (state, action){
    switch(action.type){

        case 'LETRA_MUSICA_ALTERADA':
            return { 
                ...state, 
                letra: musicas[action.payload].descricao,
                video: musicas[action.payload].video
            };
        default:
            return {
                letra: musicas[0].descricao,
                video: musicas[0].video
            }
    }

    return state;
}

export default letras