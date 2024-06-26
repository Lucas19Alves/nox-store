<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div v-if="user" class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Bem-vindo, {{ user.nome }}!</h2>
      <p class="text-gray-700"><strong>Email:</strong> {{ user.email }}</p>
      <p class="text-gray-700"><strong>Telefone:</strong> {{ user.telefone }}</p>
      <p class="text-gray-700"><strong>Endereço:</strong> {{ user.endereco }}</p>
      <p class="text-gray-700"><strong>CPF:</strong> {{ user.cpf }}</p>
      <button @click="logout" class="mt-6 w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700">Sair</button>
    </div>
    <div v-else class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <p class="text-gray-700">Você não está logado. <router-link to="/login" class="text-indigo-600 hover:underline">Login</router-link> ou <router-link to="/registrar" class="text-indigo-600 hover:underline">Registrar</router-link></p>
    </div>
  </div>
</template>

<script>
import { getUserDetails } from '../services/authService';

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    getUserDetails().then(response => {
      this.user = response.data;
    }).catch(error => {
      if (error.response) {
        console.error(error.response.data);
      } else {
        console.error("Erro desconhecido", error);
      }
    });
  },
  methods: {
    logout() {
      this.user = null;
      this.$router.push('/login');
    }
  }
};
</script>
