<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import { ref }  from 'vue'
import { useRouter } from 'vue-router'
import { defineComponent } from '@vue/composition-api'
import client from "@/client"

export default defineComponent({
    setup() {
        const router = useRouter()
        const username = ref("");
        const password = ref("");

        const login = async () => {
            console.log(`${username.value} - ${password.value}`);

            // const form = new FormData();
            // form.append("username", username.value);
            // form.append("password", password.value);
            // try {
            //   const response = await fetch("http://localhost:8000/token", {
            //     method: "POST",
            //     cache: 'no-cache',
            //     body: form
            //   });
            //   console.log("response: ", response);
            //   if (response.ok) {
            //     console.log("response: ", await response.json());
            //   }
            // } catch (error) {
            //   console.log(error);
            // }
            await client.login(username.value, password.value);

            console.log(client.isLoggedIn())
            if (client.isLoggedIn()) {
              router.push({
                name: 'Welcome',
              });
            }
          
            
        };

        return {username, password, login};
    },
})
</script>
