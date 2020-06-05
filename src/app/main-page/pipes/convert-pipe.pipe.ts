import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPipe'
})

export class ConvertPipePipe implements PipeTransform {

  transform(date: any): any {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

}
