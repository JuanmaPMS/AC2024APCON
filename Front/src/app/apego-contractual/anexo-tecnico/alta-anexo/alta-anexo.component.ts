import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { NgxFileDropModule } from 'ngx-file-drop';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alta-anexo',
  standalone: true,
  imports: [SharedModule, NgxFileDropModule],
  templateUrl: './alta-anexo.component.html',
  styleUrl: './alta-anexo.component.scss'
})
export default class ModalContratoComponent {
  @ViewChild('content') content!: ElementRef;


  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        debugger

        if(result == 'Procesar'){ // SE REDIRIGE A LA PANTALLA DE FORMULARIO CON LA INFORMACION DEVUELTA POR AI
          this.spinnerService.show();
          setTimeout(() => {
            this.router.navigate(['/apego/contrato-alta']);
            this.spinnerService.hide();

          }, 2000);
        }
        else if(result == 'Cargar'){ // SE REDIRIGE A LA PANTALLA DE FORMULARIO
          this.spinnerService.show();
          setTimeout(() => {
            this.router.navigate(['/apego/contrato-alta']);
            this.spinnerService.hide();

          }, 2000);
        }
        else if( result == 'Cancelar'){
          this.closeResult = `Closed with: ${result}`;
        }


			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

constructor(private router: Router, private spinnerService: NgxSpinnerService){


}

  ngOnInit(){

  }

  ngAfterViewInit() {

    this.open(this.content)
  }


 /* drag and drop  */
 public files: NgxFileDropEntry[] = [];

 public dropped(files: NgxFileDropEntry[]) {
   this.files = files;
   for (const droppedFile of files) {

     // Is it a file?
     if (droppedFile.fileEntry.isFile) {
       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
       fileEntry.file((file: File) => {


         this.spinnerService.show();
         setTimeout(() => {
           this.router.navigate(['/apego/contrato-alta']);
           this.spinnerService.hide();

         }, 200);
         // Here you can access the real file
         console.log(droppedFile.relativePath, file);

         /**
         // You could upload it like this:
         const formData = new FormData()
         formData.append('logo', file, relativePath)

         // Headers
         const headers = new HttpHeaders({
           'security-token': 'mytoken'
         })

         this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
         .subscribe(data => {
           // Sanitized logo returned from backend
         })
         **/

       });
     } else {
       // It was a directory (empty directories are added, otherwise only files)
       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
       console.log(droppedFile.relativePath, fileEntry);
     }
   }
 }

 public fileOver(event){
   console.log(event);
 }

 public fileLeave(event){
   console.log(event);
 }


 procesar(){

 }
}
