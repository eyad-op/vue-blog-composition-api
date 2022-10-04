<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <PostSingle :post="post" />
    </div>
  </div>
</template>

<script>
import PostSingle from "@/components/PostSingle.vue";
// import { onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["posts"],
  components: { PostSingle },
  // setup(props) {
  //   console.log(props.posts);
  //   //when using hooks inside setup they start with on onMounted, onUpdated ...
  // },
};
</script>

<style></style>
