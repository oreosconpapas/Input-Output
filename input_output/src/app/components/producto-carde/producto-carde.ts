import { Component, Input } from '@angular/core'; 
import { Producto } from '../../interface/producto';  
@Component({
  imports: [],
  selector: 'app-producto-carde',
  styleUrl: './producto-carde.css',
  templateUrl: './producto-carde.html',
})
export class ProductoCarde {
  @Input() producto!: Producto 
}
