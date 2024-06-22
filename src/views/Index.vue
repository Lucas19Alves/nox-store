<template>
    <!-- Categorias -->
<div class="bg-gray-950">
    <div class="mx-auto p-4">
        <ul class="flex xl:justify-center space-x-4 overflow-x-auto whitespace-nowrap">
            <li><a href="#" @click.prevent="scrollToProducts('camisetas')" class="px-4 text-white hover:text-purple-600">Camisetas</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('camisas')" class="px-4 text-white hover:text-purple-600">Camisas</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('calças')" class="px-4 text-white hover:text-purple-600">Calças</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('vestidos')" class="px-4 text-white hover:text-purple-600">Vestidos</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('saias')" class="px-4 text-white hover:text-purple-600">Saias</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('calçados')" class="px-4 text-white hover:text-purple-600">Calçados</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('acessorios')" class="px-4 text-white hover:text-purple-600">Acessórios</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('blusas')" class="px-4 text-white hover:text-purple-600">Blusas</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('bolsas')" class="px-4 text-white hover:text-purple-600">Bolsas</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('shorts')" class="px-4 text-white hover:text-purple-600">Shorts</a></li>
            <li><a href="#" @click.prevent="scrollToProducts('ternos')" class="px-4 text-white hover:text-purple-600">Ternos</a></li>
        </ul>
    </div>
</div>

    

    <!-- Seção de ofertas -->
    <div class="mx-auto mt-5 xl:container">
        <h1 class="text-3xl font-bold text-center my-16">Melhores Ofertas</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="oferta in ofertas" :key="oferta.id" class="bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                <img :src="oferta.image" :alt="oferta.name" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">{{ oferta.name }}</h3>
                    <p class="text-gray-700">{{ oferta.description }}</p>
                    <div class="mt-2">
                        <span v-for="color in oferta.colors" :key="color" :style="{ backgroundColor: color }"
                            class="inline-block w-4 h-4 rounded-full mr-2"></span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-900 font-bold">R${{ oferta.price.toFixed(2) }}</span>
                        <button class="px-3 py-1 bg-purple-600 text-white font-semibold rounded hover:bg-purple-500">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Barra de Filtragem -->
    <div class="mx-auto mt-5 xl:container" id="todosProdutos">
        <h1 class="text-3xl font-bold text-center my-16">Todos os produtos</h1>
        <div class="flex flex-wrap md:flex-nowrap justify-between mb-6 mx-2">
            <div class="flex space-x-4 mb-4 md:mb-0">
                <select v-model="selectedType" class="border p-2 rounded">
                    <option value="">Todos</option>
                    <option value="camisetas">Camisetas</option>
                    <option value="camisas">Camisas</option>
                    <option value="calças">Calças</option>
                    <option value="vestidos">Vestidos</option>
                    <option value="saias">Saias</option>
                    <option value="calçados">Calçados</option>
                    <option value="shorts">Shorts</option>
                    <option value="blusas">Blusas</option>
                    <option value="bolsas">Bolsas</option>
                    <option value="ternos">Ternos</option>
                    <option value="acessorios">Acessórios</option>
                </select>
                <input type="number" v-model="minPrice" placeholder="Preço mínimo" class="border p-2 rounded w-full md:w-auto">
                <input type="number" v-model="maxPrice" placeholder="Preço máximo" class="border p-2 rounded w-full md:w-auto">
            </div>
            <div class="mt-4 md:mt-0">
                <select v-model="sortBy" class="border p-2 rounded">
                    <option value="">Ordenar</option>
                    <option value="asc">Preço: Menor para Maior</option>
                    <option value="desc">Preço: Maior para Menor</option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="produto in filteredProducts" :key="produto.id" class="bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                <img :src="produto.image" :alt="produto.name" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">{{ produto.name }}</h3>
                    <p class="text-gray-700">{{ produto.description }}</p>
                    <div class="mt-2">
                        <span v-for="color in produto.colors" :key="color" :style="{ backgroundColor: color }"
                            class="inline-block w-4 h-4 rounded-full mr-2"></span>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-900 font-bold">R${{ produto.price.toFixed(2) }}</span>
                        <button class="px-3 py-1 bg-purple-600 text-white font-semibold rounded hover:bg-purple-500">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { ofertas, produtos } from '../script/produtos.js';

// Filtros
const selectedType = ref('');
const minPrice = ref('');
const maxPrice = ref('');
const sortBy = ref('');

const filteredProducts = computed(() => {
    return produtos.filter(produto => {
        const matchType = selectedType.value === '' || produto.type === selectedType.value;
        const matchMinPrice = minPrice.value === '' || produto.price >= parseFloat(minPrice.value);
        const matchMaxPrice = maxPrice.value === '' || produto.price <= parseFloat(maxPrice.value);
        return matchType && matchMinPrice && matchMaxPrice;
    }).sort((a, b) => {
        if (sortBy.value === 'asc') {
            return a.price - b.price;
        } else if (sortBy.value === 'desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });
});

const scrollToProducts = (type) => {
    selectedType.value = type;
    const element = document.getElementById('todosProdutos');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

watch(selectedType, (newType) => {
    if (newType) {
        scrollToProducts(newType);
    }
});
</script>


<style scoped>
/* Oculta a barra de rolagem */
.overflow-x-auto::-webkit-scrollbar {
    display: none;
}

/* Para Firefox */
.overflow-x-auto {
    scrollbar-width: none;
}
</style>
