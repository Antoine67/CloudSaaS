import ProfilePage from '../components/ProfilePage.vue';

export default {
  title: 'Profile/ProfilePage',
  component: ProfilePage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfilePage },
  template: '<ProfilePage v-bind="$props" />',
});

const exampleUser =  {
    id:1, 
    pseudo: "franfrandu67",
    password: "password",
    name: "Schneider",
    surname:"Francis",                     
    age:"27",                         
    email:"francis.schneider@gmail.com",              
    siret:"784 671 695 00087",              
    rib:"FR7630001007941234567890185	30001	00794	12345678901	85",                
    creationDate:"2021-07-03 08:30",       
    suspended:false,          
    sponsporshipCode: "4RF255Z47ZD",   
    sponsor:2,            
    notifications: true,
    role: {
            identifier:"ceseat",
            title:"Utilisateur"
        },
    paymentCard : [
        {
            type:"MasterCard",                         
            title:"carte des courses",                     
            wording:"Francis Schneider",                   
            number:"5180522602733283",                    
            expirationDate:"03/25",            
            cvv:"456"  
        }
    ],
    adress:{
        country:"France",            
        postalCode: "68450",        
        town:"smallcity",               
        adress1:"5 rue des chiens",            
        adress2:"",           
        longitude:"46.5",          
        latitude :"58.9"
    }
  }

export const Default = Template.bind({});
Default.args = {
    user : exampleUser,
    ModifyUser:(data) => {console.log(data);return Promise.resolve(data)},
    ModifyAddress:(data) => {console.log(data);return Promise.resolve(data)},
    ModifyNotifications:(data) => {console.log(data);return Promise.resolve(data)},
    showMessage: (message, color, title, ico) => {console.log(message, color, title, ico)},
    submitUser: (data) => {return Promise.resolve(data)},
    submitAddress: (data) => {return Promise.resolve(data)},
    submitNotification: (data) => {return Promise.resolve(data)},
};