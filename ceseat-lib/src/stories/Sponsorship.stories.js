import Sponsorship from '../components/Sponsorship.vue';

export default {
  title: 'Sponsors/Sponsorship',
  component: Sponsorship,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Sponsorship },
  template: '<Sponsorship v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
  sponsorshipCode : '1485478458745',


  //restaurant : "LaFourchette",
  sponsorCode: (sponsor) => {console.log(sponsor)}
};

export const WithSponsor = Template.bind({});
WithSponsor.args = {
  sponsor : 'Michel',
  sponsorshipCode : '1485478458745',


  //restaurant : "LaFourchette",
  sponsorCode: (sponsor) => {console.log(sponsor)}
};