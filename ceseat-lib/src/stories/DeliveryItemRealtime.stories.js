import DeliveryItemRealtime from '../components/DeliveryItemRealtime.vue';


export default {
  title: 'Delivery/DeliveryItemRealtime',
  component: DeliveryItemRealtime,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DeliveryItemRealtime },
  template: '<DeliveryItemRealtime v-bind="$props"></DeliveryItemRealtime>',
});


export const Example1 = Template.bind({});
Example1.args = {
  deliveryTitle : "Ma super commande",

  messages : [
    {
      message: `Commande en cours de préparation...`,
      time: '10:42am',
      color: 'deep-purple lighten-1',
      loading: true,
    }
  ]
  
};


export const Example2 = Template.bind({});
Example2.args = {
  deliveryTitle : "Ma super commande",

  messages : [
    {
      message: `Commande préparée`,
      time: '10h42',
      color: 'deep-purple lighten-1',
    },
    {
      message: 'Commande récupérée par le livreur',
      time: '10h45',
      color: 'green',
    },
    {
      message: 'En cours de livraison...',
      color: 'deep-purple lighten-1',
      loading: true,
    },
  ]
  
};

