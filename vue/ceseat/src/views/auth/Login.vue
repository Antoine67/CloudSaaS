<template>
<v-app>
    <v-container>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <LoginForm :submitLogin=successLogin :showMessage=showMessage :returnClick=returnClick :login=login :register=register :roleIdentifier="roleIdentifier" />

            <v-snackbar v-model="snackbar.visible" :color="snackbar.color" :multi-line="snackbar.mode === 'multi-line'" :timeout="snackbar.timeout" :top="snackbar.position === 'top'">
                <v-layout align-center pr-4>
                    <v-icon class="pr-3" dark large>{{ snackbar.icon }}</v-icon>
                    <v-layout column>
                    <div>
                        <strong>{{ snackbar.title }}</strong>
                    </div>
                    <div>{{ snackbar.text }}</div>
                    </v-layout>
                </v-layout>
                <v-btn v-if="snackbar.timeout === 0" icon @click="snackbar.visible = false">
                    <v-icon>clear</v-icon>
                </v-btn>
            </v-snackbar>
        </v-dialog>
    </v-container>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");
import {LoginForm} from 'ceseat-lib'


@Component({
    components: {
        LoginForm
    }
})
export default class Login extends Vue {

    created() {
        if (this.isLoggedIn) {
        this.$router.push("/profile");
        }
    }

    dialog = true

    roleIdentifier = "ceseat"
    
    @Auth.Getter
    private isLoggedIn!: boolean;

    @Auth.Action
    private login!: (data: any) => Promise<any>;

    @Auth.Action
    private register!: (data: any) => Promise<any>;


    returnClick() {
        this.$router.push("/");
    }

    successLogin() {
        this.$router.push("/profile");

    }

    private snackbar = {
        color: "",
        icon: "",
        mode: "",
        position: "bottom",
        text: "",
        timeout: 3000,
        title: "",
        visible: false
    }

  showMessage(message: string, color = "error", title = "Error", icon = "mdi-error") {
        this.snackbar = {
            color: color,
            icon: icon,
            mode: "multi-line",
            position: "bottom",
            timeout: 3000,
            title: title,
            text: message,
            visible: true
          }
    }
    

}
</script>

<style></style>
