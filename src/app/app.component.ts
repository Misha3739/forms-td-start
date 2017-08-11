import {Component, ElementRef, ViewChild} from '@angular/core';
import {Form, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';

  genders = ['male', 'female', 'other'];

  answer: string;

  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''

  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: suggestedName + '@mail.ru',
        gender: 'male'
      },
      secret: 'pet',
      questionAnswer: ''
    });*/

    this.signupForm.form.patchValue({
      userData:
        {
          username: suggestedName,
          email: suggestedName + '@mail.ru',
          gender: 'male'
        }
    });
  }

  /*onSubmit(form: NgForm)
  {
    console.log(form);
  }*/

  onSubmit()
  {
    this.submitted = true;

    console.log(this.signupForm);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.secretAnswer = this.signupForm.value.questionAnswer;
  }
}
