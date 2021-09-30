import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'remainingPipe'})
export class RemainingTargetPipe implements PipeTransform {
  transform(target: string, completed: string) {
    let balance = target && completed ? Number(target) - Number(completed) : Number(target);
    return balance ? balance : 0.00;
  }

}
