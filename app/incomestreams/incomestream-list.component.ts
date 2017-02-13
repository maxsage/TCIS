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
    incomestreams: any[] = [
        {
            "incomeStreamId": 1,
            "IncomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "09"
        },
        {
            "incomeStreamId": 2,
            "IncomeStreamName": "Council Tax",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04"
        },
        {
            "incomeStreamId": 3,
            "IncomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04"
        },
        {
            "incomeStreamId": 4,
            "IncomeStreamName": "Harbours",
            "generalLedgerCode": "G35355260700000",
            "vattable": "false",
            "fundCode": "04"
        },

    ]



}

