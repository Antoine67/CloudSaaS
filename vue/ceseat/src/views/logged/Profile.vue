 <template>
    <ProfilePage
    :user="user"
    :notifications="user.notification"
    :ModifyUser=ModifyUser
    :ModifyAddress=ModifyAddress
    :ModifyNotifications=ModifyNotifications
    :showMessage=showMessage
    :submitUser=onSuccessSubmit
    :submitAddress=onSuccessSubmit
    :submitNotification=onSuccessSubmit

     />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import User from "@/types/User"
import UsersService from "@/services/UsersService"
import {ProfilePage} from "ceseat-lib"
const Auth = namespace("Auth");


@Component({
    components: {ProfilePage}
})
export default class Profile extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    @Auth.State("userData")
    private userData! : any;

    user : User = {} 
    

    created() {
        this.fetchUser();
    } 

    fetchUser() {
        UsersService.get(this.userData.userId)
        .then((response) => {
            this.user = response.data;
        })
        .catch((e) => {
            console.log(e);
        });
    }

    async ModifyUser(userData: any) {
        return UsersService.update(this.userData.userId, userData)
        .then((response) => {
            this.fetchUser()
            return Promise.resolve(response)
        })
        .catch((e) => {
           return Promise.reject(e)
        });
        //console.log(userData);return Promise.resolve(userData)
    }

    async ModifyAddress(data: any) {
        return UsersService.createAddress(this.userData.userId,data)
        .then((response) => {
            this.fetchUser()
            return Promise.resolve(response)
        })
        .catch((e) => {
           return Promise.reject(e)
        });
    }

    async ModifyNotifications(data: any) {
        return UsersService.update(this.userData.userId, data)
        .then((response) => {
            this.fetchUser()
            return Promise.resolve(response)
        })
        .catch((e) => {
           return Promise.reject(e)
        });
    }

    showMessage (message: any, color: any, title: any, ico: any) {console.log("SHOW MESSAGE TODO : ",message, color, title, ico)}

    //If successfully modified
    onSuccessSubmit (data: any)  {console.log("Success")}

}
</script>