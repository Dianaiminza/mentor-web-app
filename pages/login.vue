<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

definePageMeta({
    layout: "login"
})

const formSchema = toTypedSchema(z.object({
  email: z.string().min(3).max(50),
  password: z.string().min(5, { message: 'Password must be at least 5 characters' }).max(20, { message: 'Password must not exceed 20 characters' }),


}))
import { storeToRefs } from 'pinia'; 
import { useAuthStore } from '../stores/auth';

const { signIn } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());
const user = ref({
  email: '', 
  password: '',
});
const router = useRouter();
const login = async () => {
  await signIn(user.value); 
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};
const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {

 // toast({
   // title: 'You submitted the following values:',
  //  description: h('pre', { class: 'mt-1 w-[340px] rounded-md bg-white-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  //})
   signIn(values); 
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
})
</script>

<template>
<main class="flex justify-center pt-4">

  <div class="md:w-1/4  p-4" style="background-color:aliceblue;">
    <form class="" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem v-auto-animate>
        <FormLabel>Enter your email or username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="email/username" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem v-auto-animate>
        <FormLabel>Enter your password</FormLabel>
        <FormControl>
          <Input type="text" placeholder="password" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <div class=" pt-3">
          <Button type="submit" class="bg-blue-900 hover:bg-gray-900 text-white px-4 py-2 rounded-md w-[21rem]">
            Login
          </Button>
        </div>
  </form>
  </div>
   
</main>

</template>
