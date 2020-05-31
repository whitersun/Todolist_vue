<template>
  <div class="hello">
    <div>
      <!-- <input type="text" v-model="newItem" @keyup.enter="addNew" /> -->

      <b-input-group prepend="ToDoList"  class="mt-3 w-50 mx-auto">
        <b-form-input v-model="newItem" @keyup.enter="addNew"></b-form-input>
        <b-input-group-append>
            <b-button variant="primary" @click="addNew">Add List</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <div class="box-center w-50 mx-auto my-3">
      <!-- <ul class="box-list">
        <li v-for="(item, index) in items" :class="{finished:item.isfinished}"
          @mouseover="moveBtn(item)" @mouseout="leaveBtn(item)" :key="item.id"
        >
          <span @click="toggleFinished(item)" :class="{bgYellow:item.isBgyellow}">{{ item.label }}</span>
          <span class="list-btn" v-show="item.isShow">
            <button @click="moveUp(index, item)">Move Top</button>
            <button @click="moveDown(index, item)">Move Down</button>
            <button @click="deleteBtn(index, item)">Delete</button>
          </span>
        </li>
      </ul> -->

      <b-list-group>
        <b-list-group-item v-for="(item, index) in items" :class="{finished:item.isfinished}"
        @mouseover="moveBtn(item)" @mouseout="leaveBtn(item)" :key="item.id">
          <div class="row">
            <div @click="toggleFinished(item)" class="my-auto" :class="{bgYellow:item.isBgyellow}">{{ item.label }}</div>
            <div class="ml-auto" v-show="item.isShow">
              <b-button @click="moveUp(index, item)" variant="outline-secondary">Move Up</b-button>
              <b-button @click="moveDown(index, item)" variant="outline-secondary">Move Down</b-button>
              <b-button @click="deleteBtn(index, item)" variant="outline-danger">Delete</b-button>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Store from '../assets/js/Store'

export default {
  name: 'HelloWorld',

  data: function() {
    return {
      title: 'A simple todo-list',

      items: Store.fecth(),
      newItem: '',
      msg: 'Choose one',
      isShow: false,
      isBlock: true,
      isBgyellow: false,
      leftPx: 0,
      topPx: 0
    }
  },

  watch: {
    items: {
      handler: function(items) {
        Store.save(items)
      },

      deep: true
    }
  },

  methods: {
    toggleFinished(item) {
      item.isfinished = !item.isfinished
    },

    show($event) {
      $event.cancelBubble = true;
      this.isBlock = false
      this.topPx = ($event.clientY)
      this.leftPx = ($event.clientX)
    },

    stop(event) {
      event.isBlock = true
    },

    moveBtn(item) {
      item.isShow = true
    },

    leaveBtn(item) {
      item.isShow = false
    },

    addNew() {
      if(this.newItem != '') {
        this.items.push({
          label: this.newItem,
          isfinished: false
        })
      }
      this.newItem = '';
    },

    moveUp(index, item) {
      this.items.splice(index-1, 0, (this.items[index]));

      // deleted
      this.items.splice(index+1, 1)
      item.isShow = false

      if(index == 0) {
        alert('you are highest on top')
      }
    },

    moveDown(index, item) {
      this.items.splice(index+2, 0, (this.items[index]));

      this.items.splice(index, 1)
      item.isShow = false
      
      if (index == this.items.length - 1) {
        alert('you are on lowest row')
      }
    },

    deleteBtn(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

</style>
