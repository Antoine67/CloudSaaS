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
  title: "Menu best-of",
  products: [
    {
      id : 1,
      title: "Hamburger",
      ingredients: ["Salade", "Pain", "Cornichon"]
    },
    {
      id : 2,
      title: "Ice tea",
      ingredients: []
    },
    {
      id : 3,
      title: "Frites",
      ingredients: ["Patates", "Sel"]
    },
    
  ]
}

export const Default = Template.bind({});
Default.args = {
  editable : false,
  menu :exampleMenu
};


