import { Component, ElementRef, Input, OnInit, SimpleChanges, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { ContratoService } from 'src/app/services/contrato.service';
import { CardComponent } from '../card/card.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-contrato-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent, MaterialModule],
  templateUrl: './card-list.component.html',
  styles: ``
})
export class CardListComponent implements OnInit {
  @Input()
  public contratos: Contrato[];
  @ViewChild('txtSearchCard')
  public tagInput!: ElementRef<HTMLInputElement>
  @ViewChild(MatPaginator) paginador: MatPaginator;

  //Paginacion
  public pageList: Contrato[] = [];
  public dataFiltered: Contrato[] = [];
  public lenght: number = 0;
  public pageSize: number = 4;
  public pageSizeOption: number[] = [4,8,12];
  public active: boolean = false;

  constructor(private contratosService: ContratoService) {}

  ngOnInit(): void {
    //this.contratosService.getContratos().subscribe(data => this.contratos = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onLoad();
  }

  onLoad(){
    this.paginador.firstPage();
    this.paginador.pageSize = 4;
    this.active = false;
    this.tagInput.nativeElement.value = '';
    this.onFilter();
  }

  onLoadData(data: Contrato[]){
    this.pageList = data.slice(0, 4);
    this.lenght = data.length;
  }

  onToggle(event: MatSlideToggleChange){
    this.active = event.checked;
    this.onFilter();
  }

  onFilter(){
    this.dataFiltered = this.contratos;
    const search = this.tagInput.nativeElement.value; 
    //Si solo quieren activos
    if(this.active){
      this.dataFiltered = this.dataFiltered.filter(x => x.activo === true);
    }
    if(search.length > 0){
      this.dataFiltered = this.dataFiltered.filter(o => 
        Object.keys(o).some(k => String(o[k]).toLowerCase().includes(search.toLocaleLowerCase()))
      );
    }

    //Lee data
    this.onLoadData(this.dataFiltered);
  }

  onSearch(){
    this.onFilter();
  }

  onPageChange(event: PageEvent){   
    let starIndex = event.pageIndex * event.pageSize;
    let endIndex = starIndex + event.pageSize;
    if(endIndex > this.lenght){
      endIndex = this.lenght;
    }
    this.pageList = this.contratos.slice(starIndex, endIndex);
  }

  /*onFilterActive(active: boolean): Contrato[]{
    if(active){
      return this.pageList = this.contratos.filter(x => x.activo === active);
    } else {
      return this.pageList = this.contratos.slice(0, 4);
    }
  }*/

  onResize(event){
    //this.breakpoint = (event.target.innerWidth <= 800) ? 1: 4;
  }
}
