<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="email" type="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Senha</label>
            <input v-model="password" type="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500" />
          </div>
          <div>
            <button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700">Entrar</button>
          </div>
          <p class="text-center text-sm text-gray-600">
            Não tem uma conta? <router-link to="/registrar" class="text-indigo-600 hover:underline">Registrar</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { login } from '../services/authService';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        login({ email: this.email, password: this.password })
          .then(response => {
            console.log(response.data);
            this.$router.push('/dashboard');
          })
          .catch(error => {
            console.error(error.response.data);
          });
      }
    }
  };
  </script>
  