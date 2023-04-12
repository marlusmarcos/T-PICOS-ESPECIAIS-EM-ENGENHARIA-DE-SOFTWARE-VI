<template>
    <h1>Lista com {{ quantidade }} produtos</h1>
    <ul>
        <li v-for="produto of produtos">Nome: {{ produto.nome }} Descrição: {{ produto.descricao }} preço: {{ produto.preco }}</li>
    </ul>

</template>


<script lang="ts" setup>
    const quantidade = 3
    const produtos = [
        {
          nome: 'churrasco',
          descricao: 'carne acebolada',
          preco: 10
        },
       {
          nome: 'pizza',
          descricao: 'calabresa com molho ',
          preco: 10
        },
       {
           nome: 'hamburger',
           descricao: 'feito na hora',
          preco: 10
       }
    ]
</script>