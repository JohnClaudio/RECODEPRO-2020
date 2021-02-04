const exibir_todos = () => {
    let elementos = document.getElementsByClassName("card");

    for (let i = 0; i < elementos.length; i++) {
            elementos[i].style = "display: block;";

    }

  }

const exibir_categoria = (categoria) => {

    let elementos = document.getElementsByClassName("card");

    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].id);

        if (categoria == elementos[i].id) {

            elementos[i].style = "display: block;  float-right;";
        } else
            elementos[i].style = "display: none;";
    }
}


const efeitoMenu = (props) => {

    props.onmouseover = function () {
        props.style = "background-color: white; color:red;  border-radius: 40px;";
    }

    props.onmouseout = function () {
        props.style = "background-color: none; color:white;";

    }

}


const destacar = (props) => {

        props.style = "width: 400px;";
        props.style = "height: 400px;";

      props.onmouseout = function () {
        props.style = "width: 90%;";
        props.style = "height: 90%;";


    }


}
