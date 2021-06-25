import AppHeader from '../components/AppHeader.vue';


export default {
  title: 'Menus/AppHeader',
  component: AppHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppHeader },
  template: '<AppHeader v-bind="$props"><template v-slot:additionalElementsLogged><v-btn>Slot additionnel</v-btn></template></AppHeader>',
});


export const Default = Template.bind({});
Default.args = {
  logoColor : "red",
  logoText: "ORIGINAL",
  appTitle: "CesEat",
  username: "Jean M",
  menuItems:  [
    { text: 'Mon profil', icon: 'mdi-account', onClick: () => {console.log("Mon profil")} },
    { text: 'Déconnexion', icon: 'mdi-account-remove', onClick: () => {console.log("Déconnexion")} },
  ],

  onLogoClick: () => {console.log("On logo click")},
  onLoginClick: () => {console.log("On login click")},
  
};


