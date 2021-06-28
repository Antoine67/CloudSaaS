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

const exampleMenu =  {
  id:1, 
  name: "Super menu",
  description: "Voici mon menu",
  restaurant_id: 16,
  price: 13.5,
  available: true,
  products : [
       {
        step: "entry",  
        product_id: 0,
        quantity: 1
       },
       {
        step: "main",
        product_id: 1,
        quantity: 1
       }
  ]
}

const exampleProduct = [{ 
  id:0,
  name: "Super produit",
  description: "Voici mon produit",
  restaurant_id: 16,
  available: true,
  ingredients : [
       "salt",
       "bread",
       "salad"
  ]
},
{
  id:1,
  name: "fajitas",
  description: "Voici mon produit",
  restaurant_id: 16,
  available: true,
  ingredients : [
       "tomate",
       "pain pita",
       "salad"
  ]
}]

export const Default = Template.bind({});
Default.args = {
  menu :exampleMenu,
  product : exampleProduct,
  addToCart: (menu) => {console.log(menu)},
  pay: (menu) => {console.log(menu)},
  addEnabled: true,
};


