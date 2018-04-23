import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// import NewComponent from './components/NewComponent.vue'

Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    render: h => h(App),
})

// Vue.component('NewComponent', NewComponent)

// var listGroupItem = document.getElementsByClassName('list-group-item')
// for (var i = 0; i < listGroupItem.length; i++) {
//     listGroupItem[i].addEventListener('click', function() {
//         this.classList.add('active')
//     })
// }