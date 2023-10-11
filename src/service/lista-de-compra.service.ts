
import { Injectable } from '@angular/core';
import { Item } from 'src/interfaces/iItem';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem(('itens')) || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem:string){
    const id = this.listaDeCompra.length + 1;
    const item:Item = {
      id:id,
      nome:nomeDoItem,
      data:new Date().toLocaleString('pt-BR'),
      comprado:false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem:string){
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(itemAntigo:Item, nomeEditadoDoItem:string){
    const itemEditado : Item = {
      id : itemAntigo.id,
      nome: nomeEditadoDoItem,
      data:new Date().toLocaleString('pt-BR'),
      comprado:itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
