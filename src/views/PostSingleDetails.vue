<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>

    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner.vue";
import { projectFirestore } from "@/firebase/config";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // using props
    // const { post, error, load } = getPost(props.id);
    // second way when we don't have access or we don't know the id so we use route
    const { post, error, load } = getPost(route.params.id);

    load();
    const handleDelete = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();
      router.push("/");
    };
    return { post, error, handleDelete };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button {
  cursor: pointer;
  margin: 10px auto;
}
</style>
