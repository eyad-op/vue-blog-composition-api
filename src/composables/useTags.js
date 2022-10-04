import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  //the Set() is just like lists or arrays but it doesn't allow duplicates and that makes it good for the tag cloud component
  const tagSet = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  // turning the set into array
  tags.value = [...tagSet];

  return { tags };
};
export default useTags;
