import LoginForm from '../components/LoginForm.vue';

export default {
  title: 'Auth/LoginForm',
  component: LoginForm,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginForm },
  template: '<LoginForm v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  login : (data) => {return Promise.resolve(data)},
  register : (data) => {return Promise.resolve(data)},
  showMessage: (message, color, title, ico) => {console.log(message, color, title, ico)},
  submitLogin : (data) => {return Promise.resolve(data)},
  returnClick: () => { console.log("Return cliked")}
};

