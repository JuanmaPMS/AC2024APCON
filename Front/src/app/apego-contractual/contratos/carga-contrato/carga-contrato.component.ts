import { Component } from '@angular/core';
import { SharedModule } from '../../../theme/shared/shared.module';
import { NgxFileDropEntry } from 'ngx-file-drop';

import { NgxFileDropModule } from 'ngx-file-drop';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-carga-contrato',
  standalone: true,
  imports: [SharedModule, NgxFileDropModule],
  templateUrl: './carga-contrato.component.html',
  styleUrl: './carga-contrato.component.scss'
})
export default class CargaContratoComponent {

  constructor(private router: Router, private spinnerService: NgxSpinnerService) {

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
}
