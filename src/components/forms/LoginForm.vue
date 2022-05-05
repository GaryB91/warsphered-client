<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="username" label="Email" />
                    <v-text-field v-model="password" label="Password" type="password" />
                    <v-btn type="submit" @click="loginHandler">Login</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { ref }  from 'vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "LoginForm",
    emits: ['login'],
    setup(props, { emit }) {
        const username = ref("");
        const password = ref("");
        
        const loginHandler = () => {
            emit("login", {username: username.value, password: password.value});
        };

        return {username, password, loginHandler};
        
    },
})
</script>
