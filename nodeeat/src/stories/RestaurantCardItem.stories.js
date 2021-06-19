import RestaurantCardItem from '../components/RestaurantCardItem.vue';

export default {
  title: 'Home/RestaurantCardItem',
  component: RestaurantCardItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RestaurantCardItem },
  template: '<RestaurantCardItem v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  restaurant :  {id: "1", title: "test", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptionezezae :)"},
};

