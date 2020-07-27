import {Observable} from 'rxjs';

export class MyValidators{
  static restrictedEmails(control: FormControl): {[key: string]: boolean}{
    if (['r@mail.com', 'i@mail.com'].includes(control.value)){
      return {restrictedEmail : true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.com'){
          resolve({uniqEmail: true});
        }else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
