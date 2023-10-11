import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from 'src/interfaces/iItem';
import { ListaDeCompraService } from 'src/service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'life-cycle';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;
  constructor(private listaService:ListaDeCompraService){

  }
  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }
  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  editarItem(item:Item){
    this.itemParaSerEditado = item;
  }

}
