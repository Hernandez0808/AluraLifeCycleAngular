import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces/iItem';
import { ListaDeCompraService } from 'src/service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'life-cycle';
  listaDeCompra!: Array<Item>
  constructor(private listaService:ListaDeCompraService){

  }
  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

}
