<template>
  <div>
    <h6 v-show="list.length">{{day}}</h6>
    <Poptip
      trigger="hover"
      title="Title"
      :content="item"
      placement="right-start"
      v-for="(item,index) in list"
      :key="index"
    >
      <Tag :type="type" :color="color" @click.native="handleClick(item)">{{item}}</Tag>
    </Poptip>
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
    handleClick(item) {
      console.log(item);
    }
  }
};
</script>
<style scoped>
</style>


