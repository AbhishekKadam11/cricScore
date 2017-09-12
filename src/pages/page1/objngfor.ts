import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ObjNgFor', pure: false})
export class ObjNgFor implements PipeTransform {
  transform(value, args: string[]): any {
    if (!value) {
      return value;
    }

    let keys = [];
    let data = {};
    //  let objectdata = [];
    for (let key in value) {
      data[key] = value[key];
      //  keys.push({key: key, value: value[key]});
      keys.push({obj: data});
    }
    return keys;
  }
}
