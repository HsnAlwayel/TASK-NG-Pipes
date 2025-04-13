import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPipe',
  standalone: true,
})
export class ColorPipePipe implements PipeTransform {
  transform(status: string): unknown {
    return status === 'active'
      ? 'green'
      : status === 'inactive'
      ? 'yellow'
      : 'red';
  }
}
