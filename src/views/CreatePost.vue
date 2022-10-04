<template>
  <div class="create">
    <form @submit.prevent="submitPost">
      <label for="title">Title</label>
      <input v-model="title" name="title" id="title" type="text" required />
      <label for="content">Content:</label>
      <textarea v-model="body" name="content" id="content" required></textarea>
      <label for="tags"> Tags: </label>
      <input
        v-model="tag"
        @keydown.enter.prevent="handleKeyDown"
        type="text"
        name="tags"
        id="tags"
      />
      <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>
      <button>Add post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "@/firebase/config";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const submitPost = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      };
      // for local POST
      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   // this headers is to say that we are sending json data / the type of data
      //   headers: { "Content-Type": "application/json" },
      //   // the body of request / the actual data
      //   body: JSON.stringify(post),
      // });
      const res = await projectFirestore.collection("posts").add(post);
      router.push({ name: "Home" });
    };

    return { title, body, tag, tags, handleKeyDown, submitPost };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
  resize: vertical;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
