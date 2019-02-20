<template>
  <div>
    <h6 v-show="list.length">{{day}}</h6>
    <div v-for="item in list">
      <Tag :type="type" :color="color">{{item}}</Tag>
    </div>
  </div>
</template>
<script>
export default {
  name: "DutyItem",
  props: {
    day: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    showDutyItem(item) {
      console.log(item);
    }
  }
};
</script>
<style scoped>
</style>


