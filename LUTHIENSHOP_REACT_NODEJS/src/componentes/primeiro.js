import React from 'react'

export function MeuTexto(props) {
return (
<h2>Nosso primeiro site em react {props.nome}, sobrenome {props.sobrenome}</h2>
)
}
export function NovoTexto() {
  return (
     <h2>Sem parametro</h2>
  )
  }

  export function Noreact(){
  return (<h1>oi</h1>);
}