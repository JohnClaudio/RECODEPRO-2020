import React from 'react'

export default function PedidoFrm () {
    return(
    
    <div>
    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Seu nome</label>
      <input type="text" name="nome_cliente" className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label for="telefone">Telefone</label>
      <input type="text" name="telefone" class="form-control" id="telefone"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Endereco</label>
    <input type="text" className="form-control" id="inputAddress" name="endereco" placeholder="seu endereco"/>
  </div>
  <div className="form-group">
    <label for="produto">Produto</label>
    <input type="text" name="produto" className="form-control" id="produto" placeholder="nom e descrição do produto"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="Quantidade">Quantidade</label>
      <input type="text" name="qtd" className="form-control" id="Quantidade"/>
    </div>
    <div className="form-group col-md-2">
      <label for="Valor">Valor</label>
      <input type="text" name="valor" className="form-control" id="Valor"/>
    </div>
  </div>

  <button type="submit" className="btn btn-danger">Realizar pedido</button>
</form>

        </div>
    )
}