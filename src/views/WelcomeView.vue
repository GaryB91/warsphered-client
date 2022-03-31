<template>
  <div>
    <h1>Welcome</h1>
    <router-link  to="/login"><button>Login</button></router-link> 
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {};
    },
})
</script>
