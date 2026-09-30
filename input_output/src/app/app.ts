import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './interface/producto';
import { ProductoCarde } from './components/producto-carde/producto-carde';

@Component({
  imports: [RouterOutlet,ProductoCarde],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('input_output');
    productos: Producto[] = [
    {nombre:"Oreos", precio:3567,id:6},
    {nombre:"Papas", precio:6700,id:7},
    {nombre:"Helado", precio:3670,id:67}
  ]
}
