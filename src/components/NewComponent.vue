<template>
  <div id="newApp">
    <h1>{{ test }}</h1><br>
    <ul class="list-group col-md-8">
      <li
        class="list-group-item list-group-item-action"
        v-on:click="showImage(option, index)"
        :key="index"
        v-for="(option, index) in animals"
        :class="{'active': selectedIndex === index}"
        >
        {{ option.animal }}
        </li>
    </ul>
    <img v-if="img.length > 0" :src="img" width="500px" height="300px">
  </div>
</template>

<script>
export default {
  name: 'myApp',
  data () {
    return {
      test: 'Welcome to my App',
      animals: [
        {animal: 'cat', image: 'src/assets/cat-pet-animal-domestic-104827.jpeg'},
        {animal: 'dog', image: 'src/assets/pexels-photo-356378.jpeg'},
        {animal: 'duck', image: 'src/assets/pekin-ducklings_01.jpg'}
      ],
      img: '',
      selectedIndex: ''
    }
  },
  methods: {
    showImage: function(option, index) {
      this.img = option.image
      this.selectedIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 0 auto 20px auto;
}

li {
  cursor: pointer;
  transition: ease all .3s;
}
</style>
