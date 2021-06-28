import DeliveryStateItem from '../components/DeliveryStateItem.vue';


export default {
  title: 'Delivery/DeliveryStateItem',
  component: DeliveryStateItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeliveryStateItem },
  template: '<DeliveryStateItem v-bind="$props"></DeliveryStateItem>',
});


export const Success = Template.bind({});
Success.args = {
  restaurantText : "Chez Maxou",
  stateText : "Livré",
  dateText : "10/05/2021",
  stateColor : "green",
  delivererText : "Abdel Pires",
  
};


export const Error = Template.bind({});
Error.args = {
  restaurantText : "Chez Maxou",
  stateText : "Annulé",
  dateText : "10/05/2021",
  stateColor : "red",
  
};


