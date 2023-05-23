<template>
  <div>
    <h4 @click="$router.push('./detail/0')">{{ blogList[0].title}}</h4>
    <p>
      {{ blogList[0].date }}
    </p>
  </div>
  <div>
    <h4>{{ blogList[1].title}}</h4>
    <p>{{ blogList[1].date}}</p>
  </div>
  <div>
    <h4>{{ blogList[2].title}}</h4>
    <p>{{ blogList[2].date}}</p>
  </div>
</template>

<script>

export default {
  //eslint-disable-next-line
  name: "List",
  props: {
    blogList :Array,
  },
  data() {

  },
  components : {

  }

};
</script>

<style></style>
