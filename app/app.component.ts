import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h2>{{pageTitle}}</h2>
            <im-incomestreams></im-incomestreams>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Torbay Council - VAT Systems';
}
