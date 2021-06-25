<template>
<v-app-bar
      app
      color="primary"
      dark
    >
    <span @click="onLogoClick" :style="{cursor:'pointer'}">
        <div class="d-flex align-center">
            <!--
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            />
            -->
        </div>
        <v-container>
            <v-badge
            bottom
            :color="logoColor"
            :content="logoText"
            
            >
            <span style="color:white;font-size:25px;"><b>{{appTitle}}</b></span>
            
            </v-badge>
        </v-container>
    </span>

    
    
    <v-spacer></v-spacer>

    
    <span v-if="!loggedIn">
        <v-btn 
            @click="onLoginClick"
            text
        >
            <span class="mr-2">Se connecter</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
    </span>

    <span v-else>
        <slot name="additionalElementsLogged"/>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
            <v-btn
                dark
                icon
                v-on="on"
            >
                <v-icon>mdi-account</v-icon>
            </v-btn>
            </template>
            <v-card> 
                <v-list dense>
                    <v-subheader>{{username}}</v-subheader>
                    <v-divider></v-divider>
                    <v-list-item-group                
                        color="primary"
                    >
                        <v-list-item
                        v-for="(item, i) in menuItems"
                        @click="item.onClick"
                        :key="i"
                        >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-menu> 
    </span>
</v-app-bar>

</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
    
  @Prop() loggedIn! : boolean;

  @Prop() username! : string;

  @Prop() logoText! : string;
  @Prop() logoColor! : string;

  @Prop({default: "CesEat"}) appTitle! : string;

  @Prop() onLogoClick! : () => void; 
  @Prop() onLoginClick! : () => void;  

  @Prop() menuItems!: any[];

  
  

}

</script>

<style>

</style>