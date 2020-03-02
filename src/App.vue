<template>
  <div id="app">
    <component :is="view" v-on:changeCurrent="changeView"></component>
  </div>
</template>

<script>

import {db} from './firebase'
import Intro from './components/Intro'
import Welcome from './components/Welcome'
import Container from './components/container.vue'

export default {
  name: 'App',
  components: {
    Container,
    Intro,
    Welcome
  },
  data(){
    return{
      view: "Intro",
      database: db.ref('/border'),
      datos: []
    }
  },
  methods:{
    async dameDatos(){
      let aux
      await this.database.once('value').then(function(snapshot){
        aux = snapshot.val()
      })
      this.datos = aux
    },
    changeView(viewString){
      this.view = viewString
    }
  },
  created(){
    this.dameDatos()
  }
}
</script>

<style>
#app{
  margin: 0;
}

    *{
        margin: 0;
        padding: 0;
    }

</style>
