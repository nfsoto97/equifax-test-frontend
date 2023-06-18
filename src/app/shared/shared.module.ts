import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogModule } from '../modules/login/dialog-error/error-dialog.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorDialogModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
        
    ]
})
export class SharedModule
{
}
