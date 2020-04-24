<template>
  <div class="Image-Page">
    <ImageContainer></ImageContainer>
  </div>
</template>
<script>
import ImageContainer from './ImageShow';
export default {
  name: 'ImagePage',
  data() {
    return {};
  },
  components: {
    ImageContainer
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.Image-Page {
  width: 100%;
  overflow: hidden;
  background-color: #f8f8f9;
}
</style>