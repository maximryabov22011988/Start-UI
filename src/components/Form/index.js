import React, {Component} from 'react';
import './styles.scss';
import is from 'is_js';

import Field from './components/Field';
import Button from './components/Button';

class Form extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        label: 'Email',
        type: 'email',
        value: 'Введите e-mail',
        errorMessage: 'Введите корректный e-mail. Пример: vashapochta@domain.ru',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        label: 'Пароль',
        type: 'password',
        value: 'abcDE#12',
        errorMessage: 'Введите корректный пароль. Пример: abcDE#12',
        valid: false,
        touched: false,
        validation: {
          required: true,
          password: true,
        }
      }
    }
  };

  loginHandler = () => {
    console.log('login');
  };

  registerHandler = () => {
    console.log('register');
  };

  submitHandler = evt => {
    evt.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.password) {
      const regEx = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
      isValid = value.trim().match(regEx) && isValid;
    }

    return isValid;
  }

  onChangeHandler = (evt, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = evt.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    });

    this.setState({
      formControls,
      isFormValid
    })
  };

  renderFields() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Field
          key={controlName + index}
          label={control.label}
          className="form__field"
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={evt => this.onChangeHandler(evt, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className="form">
        <h1 className="form__title">Авторизация</h1>
        <form className="form__container" onSubmit={this.submitHandler}>

          { this.renderFields() }

          <Button
            className="form__btn"
            type="submit"
            disabled={!this.state.isFormValid}
            onClick={this.loginHandler}
          >
            Войти
          </Button>
          <Button
            className="form__btn"
            type="submit"
            disabled={!this.state.isFormValid}
            onClick={this.registerHandler}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    )
  }
}

export default Form;
