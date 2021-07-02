import ProfilePage from '../components/ProfilePage.vue';

export default {
  title: 'Profile/ProfilePage',
  component: ProfilePage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfilePage },
  template: '<ProfilePage v-bind="$props" />',
});

const exampleUser =  {"id":1,"username":"testtest","name":null,"surname":null,"age":0,"email":"test@a.fr","siret":null,"rib":null,"sponsorshipCode":null,"suspended":false,"notification":true,"createdAt":"2021-06-30T14:35:32.070Z","updatedAt":"2021-06-30T14:35:32.070Z","address":null,"role":{"id":1,"identifier":"ceseat","title":"Utilisateur"}}

export const Default = Template.bind({});
Default.args = {
    user : exampleUser,
    notifications : exampleUser.notification,
    ModifyUser:(data) => {console.log(data);return Promise.resolve(data)},
    ModifyAddress:(data) => {console.log(data);return Promise.resolve(data)},
    ModifyNotifications:(data) => {console.log(data);return Promise.resolve(data)},
    showMessage: (message, color, title, ico) => {console.log(message, color, title, ico)},
    submitUser: (data) => {return Promise.resolve(data)},
    submitAddress: (data) => {return Promise.resolve(data)},
    submitNotification: (data) => {return Promise.resolve(data)},
};