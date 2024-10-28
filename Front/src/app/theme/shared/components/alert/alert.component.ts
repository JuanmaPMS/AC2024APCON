import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertMessage: string | null = null;
  alertType: 'success' | 'error' | 'info' = 'info';

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alertState$.subscribe((alert) => {
      if (alert) {
        this.alertMessage = alert.message;
        this.alertType = alert.type;
      } else {
        this.alertMessage = null;
      }
    });
  }

  closeAlert() {
    this.alertService.clearAlert();
  }
}
