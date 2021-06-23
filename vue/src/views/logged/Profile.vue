 <template>
    <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        <v-col>
        <v-avatar size="100" style="position:absolute; top: 130px">
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <v-list-item-title class="title">{{currentUser.username}}</v-list-item-title>
            <!--<v-list-item-subtitle>Role</v-list-item-subtitle>-->
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");

@Component
export default class Profile extends Vue {

    @Auth.State("user")
    private currentUser!: any;


}
</script>