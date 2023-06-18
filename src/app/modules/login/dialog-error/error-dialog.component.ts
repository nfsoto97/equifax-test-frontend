
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-error-dialog',
    template: `
        <h1 mat-dialog-title class="text-2xl font-bold mb-4">{{ title }}</h1>
        <div mat-dialog-content class="mb-4">{{ errorMessage }}</div>
        <div mat-dialog-actions class="flex justify-end">
        <button mat-button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            (click)="closeDialog()">Cerrar</button>
        </div>
    `,
    styleUrls: ['./error-dialog.styles.scss']
  })
export class ErrorDialogComponent {
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: { title: string, errorMessage: string },
      private dialogRef: MatDialogRef<ErrorDialogComponent>
    ) { }
  
    get title(): string {
      return this.data.title;
    }
  
    get errorMessage(): string {
      return this.data.errorMessage;
    }
  
    closeDialog(): void {
      this.dialogRef.close();
    }
  }