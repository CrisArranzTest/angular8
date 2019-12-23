import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {

  message = 'Esto son pruebas de las propiedades';

  getMessage(){
    console.log('Este procedimiento ha sido llamado');
    return this.message;
  }

}
