import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'en':
        return 'English';
      case 'nl':
        return 'Deutsche'
      case 'ar':
        return 'العربية'
      default:
        return value;
    }
  }

}
