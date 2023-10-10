import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/interfaces/iItem';
import { ListaDeCompraService } from 'src/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  constructor(private listaService: ListaDeCompraService) { }
  valorItem!: string;
  @Input() itemQueVaiSerEditado!: Item;

  editando:boolean = false;
  textBtn:string = 'Salvar item';
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textBtn = "Editar item";
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  editarItem(){
    this.listaService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textBtn = "Salvar item";
  }

  limparCampo() {
    this.valorItem = '';
  }
}
