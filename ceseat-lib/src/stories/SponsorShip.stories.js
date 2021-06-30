import SponsorShip from '../components/SponsorShip.vue';

export default {
  title: 'Sponsors/SponsorShip',
  component: SponsorShip,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SponsorShip },
  template: '<SponsorShip v-bind="$props" />',
});



const exampleUser =  {
    id_user: 1,
    id_address: 1,
    id_role: 1,
    type: "user",
    pseudo: "Dixitor",
    password: "admin",
    name: "chrak",
    surname: "antou",
    age: 21,
    email: "antou.chrak@gmail.com",
    siret: "",
    rib: "",
    creation_date: "2021-07-03 08:30",
    suspended: false,
    sponsoship_code: "4e3c99fe-7f35",
    sponsor: "",//ee6ed331-508b
    notifications: false
}


export const Default = Template.bind({});
Default.args = {
  user :exampleUser,
  //restaurant : "LaFourchette",
  sponsorCode: (sponsor) => {console.log(sponsor)}
};