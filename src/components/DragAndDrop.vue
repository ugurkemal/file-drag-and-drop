<template>
  <div id="app">
    <div @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <div>
          Add files here!
        </div>
      <ul v-if="this.filelist.length" v-cloak>
        <li v-for="file in filelist" :key="file.name">
          {{ file.name }}<button type="button" @click="remove(filelist.indexOf(file))" title="Remove file">remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop',
  data () {
    return {
      filelist: []
    }
  },
  methods: {
    onChange () {
    },
    remove (i) {
      this.filelist.splice(i, 1)
    },
    dragover (event) {
      event.preventDefault()
    },
    dragleave (event) {
    },
    drop (event) {
      event.preventDefault()
      this.filelist = Array.prototype.slice.call(event.dataTransfer.files)
      this.onChange()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
[v-cloak] {
  display: none;
}
</style>
