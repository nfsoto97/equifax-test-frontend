import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent {

  form: FormGroup;
  datos: any;

  constructor(
    private formBuilder: FormBuilder,
    private _placeService:PlaceService
    ) {
    this.form = this.formBuilder.group({
      latitud: ['40.7128', Validators.required],
      longitud: ['-74.006', Validators.required]
    });
  }

  consultarDatos() {
    if (this.form.valid) {
      const latitud = this.form.get('latitud')?.value;
      const longitud = this.form.get('longitud')?.value;
  
      this._placeService.findByLatitudeAndLongitude(latitud, longitud).subscribe({
        next: (response) => {
          // Actualiza this.datos con los datos recibidos del backend
          this.datos = response;
        },
        error: (error) => {
          console.error('Error al consultar los datos:', error);
        }
      });
    }
  }

}
