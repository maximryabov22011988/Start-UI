import React, {Component} from 'react';
import is from 'is_js';
import './Demo.scss';

import Wrapper from './components/Wrapper';

import Button from '../../components/Button';
import Close from '../../components/Close';
import MenuToggle from '../../components/MenuToggle';
import Link from '../../components/Link';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import Range from '../../components/Range';
import Toggle from '../../components/Toggle';
import Select from '../../components/Select';
import Field from '../../components/Field';
import Textarea from '../../components/Textarea';
import Form from '../../components/Form';

class Demo extends Component {
  state = {
    controls: {
      name: {
        label: 'Login',
        type: 'text',
        value: 'Enter your login',
        errorMessage: 'Name must contain at least 3 characters',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 120
        }
      },
      email: {
        label: 'E-mail',
        type: 'email',
        value: 'Enter your e-mail',
        errorMessage: 'Enter valid e-mail. Example: vashapochta@domain.ru',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      phone: {
        label: 'Phone',
        type: 'tel',
        value: 'Enter your phone',
        errorMessage: 'Enter valid phone. Example: +7 927 111 22 33',
        valid: false,
        touched: false,
        validation: {
          required: true,
          phone: true,
        }
      },
      password: {
        label: 'Password',
        type: 'password',
        value: '123456',
        errorMessage: 'Enter valid password. Example: abcDE#12',
        valid: false,
        touched: false,
        validation: {
          required: true,
          password: true,
        }
      },
      message: {
        label: 'Message',
        value: 'Write some message here ...',
        errorMessage: 'This field is required',
        valid: false,
        touched: false,
        validation: {
          required: true,
        }
      },
    },
    select: {
      label: 'Country',
      value: '',
      options: {
        'russia': {
          label: 'Russia',
          selected: false
        },
        'france': {
          label: 'France',
          selected: false
        }
      },
      isOpen: false,
    },
    isChecked: false,
    selectedRadio: 'Radio #1',
    isToggle: false,
    rangeValue: '0'
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.maxLength) {
      isValid = value.length <= validation.maxLength && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.phone) {
      const regex = /^((\+?7|8)[\-\ ]?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
      isValid = value.trim().match(regex) && isValid;
    }

    if (validation.password) {
      const regEx = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
      isValid = value.trim().match(regEx) && isValid;
    }

    return isValid;
  }

  onChangeHandler = (evt, controlName) => {
    const controls = {...this.state.controls};
    const control = {...controls[controlName]};

    control.value = evt.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    controls[controlName] = control;

    this.setState({controls})
  };

  onChangeRadioHandler = evt => {
    this.setState({
      selectedRadio: evt.target.value
    })
  };

  onChangeRangeHandler = evt => {
    console.log(evt.target.value);
    this.setState({
      rangeValue: evt.target.value
    })
  };

  toggleMenuHandler = () => {
    this.setState({
      isActiveMenu: !this.state.isActiveMenu
    })
  };

  toggleCheckboxHandler = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  };

  toggleHandler = () => {
    this.setState({
      isToggle: !this.state.isToggle
    })
  };

  selectItemHandler = (id, evt) => {
    const selectItem = () => {
      const select = {...this.state.select};
      let currentOption = select.options[id];
      select.value = currentOption.label;
      select.isOpen = false;
      this.setState({select});
    };
    if (evt.key === 'Enter' || evt.type === 'click') {
      selectItem();
    }
  };

  toggleOnHandler = () => {
    this.setState({
      select: {
        ...this.state.select,
        isOpen: !this.state.select.isOpen
      }
    });
  };

  render() {
    const control = this.state.controls;
    const components = [
      {
        wrapper: {
          title: 'Link',
          sourceLink: ''
        },
        name: Link,
        text: 'Link',
        props: {
          href: '?',
          type: 'text'
        }
      },
      {
        wrapper: {
          title: 'Close',
          sourceLink: ''
        },
        name: Close,
        text: '',
        props: {}
      },
      {
        wrapper: {
          title: 'Button',
          sourceLink: ''
        },
        name: Button,
        text: 'Button',
        props: {}
      },
      {
        wrapper: {
          title: 'MenuToggle',
          sourceLink: ''
        },
        name: MenuToggle,
        text: '',
        props: {
          onToggle: this.toggleMenuHandler,
          isActive: this.state.isActiveMenu
        }
      },
      {
        wrapper: {
          title: 'Checkbox',
          sourceLink: ''
        },
        name: Checkbox,
        text: '',
        props: {
          label: "Custom checkbox",
          type: "custom",
          onCheck: this.toggleCheckboxHandler,
          helpText: "This is help text",
        }
      },
      {
        wrapper: {
          title: 'Radio',
          sourceLink: ''
        },
        name: Radio,
        text: '',
        props: {
          label: "Custom radio",
          type: "custom",
          name: "my-radio",
          value: "Radio #1",
          checked: this.state.selectedRadio === 'Radio #1',
          onChange: this.onChangeRadioHandler,
          helpText: "This is help text",
        }
      },
      {
        wrapper: {
          title: 'Toggle',
          sourceLink: ''
        },
        name: Toggle,
        text: '',
        props: {
          valueOn: "On",
          valueOff: "Off",
          isToggle: this.state.isToggle,
        onToggle: this.toggleHandler,
        }
      },
      {
        wrapper: {
          title: 'Range',
          sourceLink: ''
        },
        name: Range,
        text: '',
        props: {
          minValue: 0,
          maxValue: 100,
          step: 20,
          startValue: this.state.rangeValue,
          onChange: evt => this.onChangeRangeHandler(evt),
          disabled: false
        }
      },
      {
        wrapper: {
          title: 'Select',
          sourceLink: ''
        },
        name: Select,
        text: '',
        props: {
          label: this.state.select.label,
          value: this.state.select.value,
          options: this.state.select.options,
          isOpen: this.state.select.isOpen,
          onToggleOn: this.toggleOnHandler,
          onSelectItem: this.selectItemHandler,
          disabled: false
        }
      },
      {
        wrapper: {
          title: 'Field',
          sourceLink: ''
        },
        name: Field,
        text: '',
        props: {
          label: control.name.label,
          type: control.name.type,
          value: control.name.value,
          valid: control.name.valid,
          touched: control.name.touched,
          shouldValidate: !!control.name.validation,
          onChange: evt => this.onChangeHandler(evt, 'name'),
          errorMessage: control.name.errorMessage
        }
      },
      {
        wrapper: {
          title: 'Field',
          sourceLink: ''
        },
        name: Field,
        text: '',
        props: {
          label: control.email.label,
          type: control.email.type,
          value: control.email.value,
          valid: control.email.valid,
          touched: control.email.touched,
          shouldValidate: !!control.email.validation,
          onChange: evt => this.onChangeHandler(evt, 'email'),
          errorMessage: control.email.errorMessage
        }
      },
      {
        wrapper: {
          title: 'Field',
          sourceLink: ''
        },
        name: Field,
        text: '',
        props: {
          label: control.phone.label,
          type: control.phone.type,
          value: control.phone.value,
          valid: control.phone.valid,
          touched: control.phone.touched,
          shouldValidate: !!control.phone.validation,
          onChange: evt => this.onChangeHandler(evt, 'phone'),
          errorMessage: control.phone.errorMessage
        }
      },
      {
        wrapper: {
          title: 'Field',
          sourceLink: ''
        },
        name: Field,
        text: '',
        props: {
          label: control.password.label,
          type: control.password.type,
          value: control.password.value,
          valid: control.password.valid,
          touched: control.password.touched,
          shouldValidate: !!control.password.validation,
          onChange: evt => this.onChangeHandler(evt, 'password'),
          errorMessage: control.password.errorMessage
        }
      },
      {
        wrapper: {
          title: 'Textarea',
          sourceLink: ''
        },
        name: Textarea,
        text: '',
        props: {
          label: control.message.label,
          value: control.message.value,
          valid: control.message.valid,
          touched: control.message.touched,
          shouldValidate: !!control.message.validation,
          onChange: evt => this.onChangeHandler(evt, 'message'),
          errorMessage: control.message.errorMessage
        }
      },
      {
        wrapper: {
          title: 'Form',
          sourceLink: '',
          fullWidth: true
        },
        name: Form,
        text: '',
        props: {}
      },
    ];

    return (
      <div className="container">

        { components.map((component, index) => {
          let Component = component.name;
          let ComponentProps = component.props;
          let ComponentText = component.text;

          return (
            <Wrapper
              key={index}
              title={component.wrapper.title}
              sourceLink={component.wrapper.sourceLink}
              fullWidth={component.wrapper.fullWidth}
              halfWidth={component.wrapper.halfWidth}
            >
              <Component {...ComponentProps}>
                {ComponentText}
              </Component>
            </Wrapper>
          );
        })}
      </div>

    );
  }
}

export default Demo;
