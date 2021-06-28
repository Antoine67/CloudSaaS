import GeolocationItem from '../components/GeolocationItem.vue';


export default {
  title: 'Data/GeolocationItem',
  component: GeolocationItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GeolocationItem },
  template: '<GeolocationItem v-bind="$props"></GeolocationItem>',
});


export const Default = Template.bind({});
Default.args = {
  displayed : true,
  geolocationData : {}
  
};


