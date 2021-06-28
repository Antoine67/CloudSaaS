import OrderItem from '../components/OrderItem.vue';

export default {
  title: 'Order/OrderItem',
  component: OrderItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OrderItem },
  template: '<OrderItem v-bind="$props" />',
});

const exampleOrder =  {
    id: 1,
    date: "2021-07-03 08:30",
    restaurant_id: 16,
    customer_id: 5,
    deliverer_id: 3,
    status: "WAITING_VALIDATION",
    pricing: {
        paid: false,     
        payment_card_id: 5,
        comission_fees: 3,
        restaurant_fees: 10,
        delivering_fees: 0.5,
        discount: 10,
        total: 13.5           
    },
    menus : [
        {
        id: 1,
        name: "Menu best-of",
        description: "voici le menu",      
        price: 27,
 
        products : [
            {
            id: 1,
            step: "entry",  
            name: "Super produit",
            description: "Voici mon produit",
            price: 13.5,
            quantity: 1,
            ingredients : [
                   "salt",
                   "bread",
                   "salad"
                   ]
            },
            {
            id:2,
            step: "main",
            name: "Super produit",
            description: "Voici mon produit",
            price: 13.5,
            quantity: 1,
            ingredients : [
                   "salt",
                   "bread",
                   "salad"
                    ]
            }
        ]},
        {
            id: 2,
            name: "Menu maxi",
            description: "voici le gros menu",
            price: 34,
     
            products : [
                {
                id:1,
                step: "entry",  
                name: "la dingz",
                description: "Voici le produit",
                price: 13.5,
                quantity: 1,
                ingredients : [
                       "salt",
                       "bread",
                       "salad"
                       ]
                },
                {
                id:2,
                step: "main",
                name: "Pizza",
                description: "Voici mon produit",
                price: 13.5,
                quantity: 1,
                ingredients : [
                       "salt",
                       "bread",
                       "salad"
                        ]
                }
            ]
        }
    ] 
}

export const Default = Template.bind({});
Default.args = {
  order :exampleOrder,
  restaurant : "LaFourchette",
  deleteFromOrder: (order) => {console.log(order)}
};