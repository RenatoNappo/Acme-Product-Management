import { ProductService } from './shared/Services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent {
  title = "Acme Product Management";
}
