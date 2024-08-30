import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import informacao from './directives/informacao';
import posicao from './directives/posicao';

const app = createApp(App);

app.directive('texto', );

app.directive('posicao', posicao);

app.directive('informacao', informacao);

app.mount('#app');
