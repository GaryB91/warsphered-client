<template>
  <v-container id="loginView">
    <v-row>
      <v-col cols="6">
        <login-carousel />
      </v-col>
      <v-col cols="6">
        <v-tabs v-model=tabs>
          <v-tab value="login-tab">Login</v-tab>
          <v-tab value="register-tab">Register</v-tab>
        </v-tabs>

        <v-window v-model="tabs">
          <v-window-item value="login-tab">
            <login-form @login="login" />
          </v-window-item>
          <v-window-item value="register-tab">
            <register-form @register="register" />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ref }  from 'vue'
import { useRouter } from 'vue-router'
import { defineComponent } from '@vue/composition-api'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import LoginCarousel from '@/components/forms/LoginCarousel.vue'
import client from "@/client"

export default defineComponent({
    components: { LoginForm, RegisterForm, LoginCarousel },
    setup() {
        const router = useRouter()
        const tabs = ref("");

        const login = async ({username, password}) => {
            const response = await client.login(username, password);
            if (client.isLoggedIn()) {
              localStorage.setItem("user", response);
              router.push({
                name: 'Welcome',
              });
            }
        };
        const register = async (username, password, confirmPassword) => {
            await client.register(username, password, confirmPassword);

        };

        return {tabs, login, register};
    },
})
</script>
