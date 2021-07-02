 <template>
    <Sponsorship
    :sponsor="sponsorUser.username"
    :sponsorshipCode="user.sponsorshipCode"
    :sponsorCode="onSponsorSubmit"
    

     />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import UsersService from "@/services/UsersService"
import {Sponsorship} from "ceseat-lib"
const Auth = namespace("Auth");


@Component({
    components: {Sponsorship}
})
export default class SponsorshipPage extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    @Auth.State("userData")
    private userData! : any;

    user = {} 

    sponsorUser = {}
    

    created() {
        this.fetchUser();
        
    } 

    fetchUser() {
        UsersService.get(this.userData.userId)
        .then((response) => {
            this.user = response.data;
            this.fetchSponsorUser()
        })
        .catch((e) => {
            console.log(e);
        });
    }

    fetchSponsorUser() {
        UsersService.get(this.user.sponsorId)
        .then((response) => {
            this.sponsorUser = response.data;
        })
        .catch((e) => {
            console.log(e);
        });
    }

    onSponsorSubmit(newSponsorCode) {
        UsersService.updateSponsor(this.userData.userId, {sponsorshipCode:newSponsorCode})
        .then((response) => {
            console.log("RES",response)
        })
        .catch((e) => {
           console.log("err")
        });
    }


    showMessage (message: any, color: any, title: any, ico: any) {console.log("SHOW MESSAGE TODO : ",message, color, title, ico)}

    //If successfully modified
    onSuccessSubmit (data: any)  {console.log("Success")}

}
</script>