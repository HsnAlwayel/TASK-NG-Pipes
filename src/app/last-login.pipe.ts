import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastLogin',
  standalone: true,
})
export class LastLoginPipe implements PipeTransform {
  transform(date: Date): unknown {
    const daysAgo =
      (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
    return daysAgo <= 7
      ? '🔥'
      : daysAgo <= 30
      ? '💤'
      : daysAgo <= 90
      ? '🦥'
      : '👻 ';
  }
}
