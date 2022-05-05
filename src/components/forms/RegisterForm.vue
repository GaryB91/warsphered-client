<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="fullName" label="Full Name" />
                    <v-text-field v-model="username" label="Email" />
                    <v-text-field v-model="password" label="Password" type="password" />
                    <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" />
                    <v-btn type="submit" @click="registerHandler">Register</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { ref }  from 'vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "RegisterForm",
    emits: ['register'],
    setup(props, { emit }) {
        const fullName = ref("");
        const username = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        
        const registerHandler = () => {
            emit("register", {
                "fullName": fullName.value,
                "username": username.value, 
                "password": password.value,
                "confirmPassword": confirmPassword.value,
            });
        };

        return {fullName, username, password, confirmPassword, registerHandler};
        
    },
})
</script>
