import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertMessage | null>();
  alertState$ = this.alertSubject.asObservable();

  showAlert(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.alertSubject.next({ message, type });
  }

  clearAlert() {
    this.alertSubject.next(null);
  }

}

interface AlertMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}
