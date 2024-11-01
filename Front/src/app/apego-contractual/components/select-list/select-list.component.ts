import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Desglose } from 'src/app/interfaces/desglose.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BubblePaginationDirective } from 'src/app/material/bubble-pagination.directive';


@Component({
  selector: 'app-select-list',
  standalone: true,
  imports: [MaterialModule, HeaderTitleComponent, BubblePaginationDirective],
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

  onSaveAll(){
    console.log(this.desglose);
  }

  onSaveSelect(){
    console.log([...this.selectedRows]);
  }

}
