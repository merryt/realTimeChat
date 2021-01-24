<!-- myapp/src/components/Chat.vue-->
<template>
  <div>
    <h1 class="md-title">My Chat App</h1>
<div>
      <label>Messages</label>
      <textarea v-model="textarea" disabled></textarea>
    </div>
    <div>
      <label>Your message</label>
      <input v-model="message">
      <button class="md-primary md-raised">Submit</button>
    </div>
  </div>
</template>

<script>
 export default {
     name: 'HelloWorld',
     data () {
         return {
             textarea: "dummy text\nblup\ndummy text",
             message: "hey"
         }
     }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .md-app {
     height: 800px;
     border: 1px solid rgba(#000, .12);
 }
 .md-textarea {
     height: 300px;
 }
</style>
