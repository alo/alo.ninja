import { Component } from '@angular/core';

@Component({
  selector: 'alo-footer',
  template: `
    <footer>
      <div>Copyright © 2020 Álvaro Quirós. Todos los derechos reservados.</div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor() {}
}
