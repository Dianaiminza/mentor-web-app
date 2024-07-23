import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCookie } from 'nuxt/app'

interface UserLoginPayloadInterface {
  email: string;
  password: string;
}
export const useAuthStore = defineStore(
  {
  id: 'auth',
  state: () => ({
    //authUser: null,
    authenticated: false,
    loading: false,
   }),
   getters: {
 //user : (state)=> state.authUser
   },
  actions: {
    async signIn ({  email, password }: UserLoginPayloadInterface) {
      try {
        const { data, pending }: any = await useFetch('https://mentorapi-tawz.onrender.com/signin', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
          },
        });
        this.loading = pending;
        console.log(`login data ${data}`);
        if (data.value) {
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          token.value = data?.value?.token; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
        }

      } catch (error) {
        console.error(error);
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  }
  
})
