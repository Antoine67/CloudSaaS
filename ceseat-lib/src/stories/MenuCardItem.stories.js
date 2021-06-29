//import { codePointAt } from 'core-js/core/string';
import MenuCardItem from '../components/MenuCardItem.vue';

export default {
  title: 'Menus/MenuCardItem',
  component: MenuCardItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenuCardItem },
  template: '<MenuCardItem v-bind="$props" />',
});

const exampleMenu =  {"products":[{"id":"test","name":"Super produit","description":"Voici mon produit","restaurant_id":16,"available":true,"price":13.5,"ingredients":["test","test2","test3"]}],"name":"dwdwdaaa","description":"string","restaurant_id":1,"price":40,"available":true,"id":"60db9c4edffd030013726545"}

export const Default = Template.bind({});
Default.args = {
  menu :exampleMenu,
  addToCart: (menu) => {console.log(menu)},
  pay: (menu) => {console.log(menu)},
  addEnabled: true,
};


