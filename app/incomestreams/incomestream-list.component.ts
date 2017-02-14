/**
 * Created by csit011 on 07/02/2017.
 */
import { Component } from '@angular/core';

@Component ({
    selector: 'im-incomestreams',
    templateUrl: 'app/incomestreams/incomestream-list.component.html'
})
export class IncomeStreamListComponent {
    pageTitle: string = 'Income Stream List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    incomestreams: any[] = [
        {
            "incomeStreamId": 1,
            "incomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "09",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/210224/misc-coin.png&disposition=attachment"
        },
        {
            "incomeStreamId": 2,
            "incomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/171507/treasure.png&disposition=attachment"
        },
        {
            "incomeStreamId": 3,
            "incomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/48349/ATTENT03.png&disposition=attachment"
        },
        {
            "incomeStreamId": 4,
            "incomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/127183/pessoas.png&disposition=attachment"
        },

    ]



}

