import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Desglose } from 'src/app/interfaces/desglose.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-select-list',
  standalone: true,
  imports: [MaterialModule, HeaderTitleComponent],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.scss'
})


export class SelectListComponent implements OnChanges, AfterViewInit {
  @Input()
  public desglose: Desglose[] = [];
  @Input()
  public contrato: string = '';
  @Input()
  public cliente: string = '';
  @Input()
  public tipo: string = '';
  @Input()
  public documento: string = '';
  @ViewChild(MatPaginator) paginador: MatPaginator;
  public dataSource = new MatTableDataSource<Desglose>;
  //public dataSource: Desglose[] = [];

  displayedColumns: string[] = ['descripcion'];
  //dataSource: Desglose[];
  clickedRows = new Set<Desglose>();
  selectedRows = new Set<Desglose>();


  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.dataSource.paginator = this.paginador;
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.dataSource = new MatTableDataSource(this.desglose);
      this.desglose.forEach(this.selectedRows.add, this.selectedRows);
      this.dataSource.paginator = this.paginador;
  }

  onClicked(row: Desglose){
      //debugger;
      if(this.clickedRows.has(row)){
        this.clickedRows.delete(row);
        this.selectedRows.add(row);
      } else {
        this.clickedRows.add(row);
        this.selectedRows.delete(row);
      }
      console.log(this.clickedRows);
      console.log(this.selectedRows);
  }

}
