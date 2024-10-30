import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorTranslation extends MatPaginatorIntl{
    constructor() { super();}

    override itemsPerPageLabel = 'Registros por página';
    override nextPageLabel = 'Página siguiente';
    override previousPageLabel = 'Página anterior';
    override firstPageLabel = 'Primera página';
    override lastPageLabel = 'Última página';
    override getRangeLabel = (page: number, pageSize: number, lenght: number): string =>{
        if(!lenght){
            return '0 - 0 de 0';
        }
        const firstItemPage = page * pageSize;
        const lastItemPage = firstItemPage < lenght ? Math.min(firstItemPage + pageSize, lenght) : firstItemPage + pageSize;
        return `${firstItemPage + 1} - ${lastItemPage} de ${lenght}`;
    }
}
