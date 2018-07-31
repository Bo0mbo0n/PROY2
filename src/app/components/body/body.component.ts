import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  
  mostrar = true;

frase: any = {
  mensaje: 'Nada se olvida más despacio que una ofensa; y nada más rápido que un favor',
  autor: 'Martin Luther King'
};
  
Minions: string[] = ['Bob', 'Dave', 'Jerry', 'Stuart'];
 
}

