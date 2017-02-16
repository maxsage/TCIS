import {PipeTransform, Pipe} from "@angular/core";
import {IIncomeStream} from "./incomestream";

@Pipe({
    name: 'incomeStreamFilter'
})
export class IncomeStreamFilterPipe implements PipeTransform {

    transform(value: IIncomeStream[], filterBy: string): IIncomeStream[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((incomeStream: IIncomeStream) =>
            incomeStream.incomeStreamName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
    }
}