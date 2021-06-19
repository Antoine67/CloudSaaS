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

export const Default = Template.bind({});
Default.args = {
  menu : {
    title: "test",
    products: [
      {
        id : 1,
        title: "test"
      }
    ]
  }
};

