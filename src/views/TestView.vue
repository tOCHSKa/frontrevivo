<template>
  <div>
    <h1>Test View</h1>
  </div>

  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="getState">Get State</button>
  </div>
  
  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="fetchTest">Test</button>
  </div>
  
  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="fetchMe">Me</button>
  </div>
  
  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="loginFETCHlogin">Login</button>
  </div>
  
  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="fetchRegister">Register</button>
  </div>
  
  <div class="flex justify-center">
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      accept="image/*"
      @change="uploadFile"
    />
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="openFilePicker">Upload</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/userStore'
import { test, me, login, register, upload } from '@/services/api'

const store = useUserStore()

const getState = () => {
    console.log(store.user)
}

const fetchTest = async () => {
  try {
    const response = await test()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

const fetchMe = async () => {
  try {
    const response = await me()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

let email = 'test@test.com'
let password = '123456'
const loginFETCHlogin = async () => {
  try {
    const response = await login({ email, password }) 
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

let registerEmail = 'test2@test.com'
let registerPassword = '123456'
const fetchRegister = async () => {
  try {
    const response = await register(registerEmail, registerPassword)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
const fileInput = ref(null)

function openFilePicker() {
  fileInput.value.click()
}

const infoUpload = ref({})
const uploadFile = async (e) => {
  try {
    const file = e.target.files[0]

    if (!file) return

    const response = await upload(file)
    infoUpload.value = response
    console.log(response)

  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
</style>