<script setup>

const data = { cor: 'blue', tamanhoFonte: '32px', totalCaracteres: 4 };

const color = {
  mounted(el) {
    console.log(el);
  },
}

</script>

<template>
  <div>
    <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Primeira diretiva customizada</p>
    <p v-texto="data">Teste</p>
    <div v-posicao:absolute="150" v-texto="{cor: 'green', tamanhoFonte: '35px'}">Olá, eu sou um binding de argumento e valor</div>



    <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrará o código A na parte frontal do equipamento.'"> i</span>
    <br>
    <span>Código B: </span><input type="text"><span v-informacao:destacado.doisClicksMouse.sairAutomaticamente="'Você encontrará o código B na parte transeira do equipamento, abaixo da tampa de proteção.'"> i</span>
    <h1 v-color>Diretiva customizada registrada localmente (no componente)</h1>
  </div>
</template>
