/**
 * Created by csit011 on 07/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import {IIncomeStream} from "./incomestream";

@Component ({
    selector: 'im-incomestreams',
    moduleId: module.id,
    templateUrl: 'incomestream-list.component.html',
    styleUrls: ['incomestream-list.component.css']
})
export class IncomeStreamListComponent
                        implements OnInit {
    pageTitle: string = 'Income Stream List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "Council";
    incomestreams: IIncomeStream[] = [
        {
            "incomeStreamId": 1,
            "incomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "09",
            "averageTransaction": "3.75",
            "usageRating": "2.7",
            "checkCurrentDate": "01/07/2015",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/210224/misc-coin.png&disposition=attachment",
        },
        {
            "incomeStreamId": 2,
            "incomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "averageTransaction": "3.751",
            "usageRating": "1.9",
            "checkCurrentDate": "01/08/2015",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/171507/treasure.png&disposition=attachment"
        },
        {
            "incomeStreamId": 3,
            "incomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "averageTransaction": "003.75",
            "usageRating": "2.8",
            "checkCurrentDate": "01/07/2015",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/48349/ATTENT03.png&disposition=attachment"
        },
        {
            "incomeStreamId": 4,
            "incomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04",
            "averageTransaction": "312.75",
            "usageRating": "4.9",
            "checkCurrentDate": "01/07/2015",
            "imageUrl": "https://openclipart.org/image/50px/svg_to_png/127183/pessoas.png&disposition=attachment"
        },

    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Income Stream List: " + message;
    }
}

