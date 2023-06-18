import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { placeRoutes } from './place.routing';
import { PlaceComponent } from './place.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PlaceComponent
    ],
    imports     : [
        RouterModule.forChild(placeRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        SharedModule
    ]
})
export class PlaceModule
{
}
