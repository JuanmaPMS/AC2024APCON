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
  @ViewChild('ddlInicioVigencia')
  public tagInicio!: ElementRef<HTMLSelectElement>
  @ViewChild('ddlFinVigencia')
  public tagFin!: ElementRef<HTMLSelectElement>
  @ViewChild('txtSearchCard')
  public tagInput!: ElementRef<HTMLInputElement>
  @ViewChild(MatPaginator) paginador: MatPaginator;

  //Paginacion
  public pageList: Contrato[] = [];
  public dataFiltered: Contrato[] = [];
  public lenght: number = 0;
  public pageSize: number = 4;
  public pageSizeOption: number[] = [4, 8, 12];
  //Filtros
  public active: boolean = false;
  public searching: boolean = false;
  public inicio:number[] = [];
  public fin:number[] = [];

  constructor(private contratosService: ContratoService) {}

  ngOnInit(): void {
    //this.contratosService.getContratos().subscribe(data => this.contratos = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onLoad();
    this.getYears();
  }

  onLoad(){
    if(this.paginador!){
      this.paginador.firstPage();
      this.paginador.pageSize = 4;
    } 
    if(this.tagInput!) {this.tagInput.nativeElement.value = '';}
    if(this.tagInicio!) {this.tagInicio.nativeElement.selectedIndex = 0;}
    if(this.tagFin!) {this.tagFin.nativeElement.selectedIndex = 0;}
    this.pageSize = 4;
    this.active = false;
    this.onFilter();
  }

  getYears(){
    this.inicio = Array.from(new Set(this.contratos.map(r => new Date(this.parseDate(r.inicioVigencia)).getFullYear()))).sort(); 
    this.fin = Array.from(new Set(this.contratos.map(r => new Date(this.parseDate(r.finVigencia)).getFullYear()))).sort();
  }

  onLoadData(data: Contrato[]){
    this.pageList = data.slice(0, this.pageSize);
    this.lenght = data.length;
  }

  onToggle(event: MatSlideToggleChange){
    this.active = event.checked;
    this.onFilter();
  }

  onFilter(){
    //debugger;
    this.dataFiltered = this.contratos;
    const search = this.tagInput! ? this.tagInput.nativeElement.value:''; 
    const ddlIndexIni = this.tagInicio! ? this.tagInicio.nativeElement.selectedIndex: 0;
    const ddlIndexFin = this.tagFin! ? this.tagFin.nativeElement.selectedIndex: 0;
    //Si solo quieren activos
    if(this.active){
      this.dataFiltered = this.dataFiltered.filter(x => x.activo === true);
    }
    if(search.length > 0){
      this.dataFiltered = this.dataFiltered.filter(o => 
        Object.keys(o).some(k => String(o[k]).toLowerCase().includes(search.toLocaleLowerCase()))
      );
    }
    if(ddlIndexIni > 0){
      var yearInicio = Number(this.tagInicio.nativeElement.value);
      this.dataFiltered = this.dataFiltered.filter(x => 
        this.parseDate(x.inicioVigencia).getFullYear() === yearInicio);
    }
    if(ddlIndexFin > 0){
      var yearFin = Number(this.tagFin.nativeElement.value);
      this.dataFiltered = this.dataFiltered.filter(x => 
        this.parseDate(x.finVigencia).getFullYear() === yearFin);
    }

    //Lee data
    this.onLoadData(this.dataFiltered);
  }

  onSearch(){
    this.onFilter();
  }

  onSearching(){
    const txt = this.tagInput.nativeElement.value;
    if(txt.length > 0){
      this.searching = true;
    } else {
      this.searching = false;
    }
  }

  onClear(){
    this.tagInput.nativeElement.value = '';
    this.searching = false;
    this.onFilter();
  }

  onPageChange(event: PageEvent){   
    this.pageSize = event.pageSize;
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

  parseDate(fecha: Date): Date{
    var extract = String(fecha).split('/');
    var newDate = extract[1] + '/' + extract[0] + '/' + extract[2];
    return new Date(newDate);
  }
}
