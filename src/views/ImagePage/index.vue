<template>
  <div class="Image-Page">
    <ImageContainer :imgData=imgData></ImageContainer>
  </div>
</template>
<script>
import ImageContainer from "../../components/ImageShow"
export default {
  name: 'ImagePage',
  data() {
    return {
      imgData:[],
    };
  },
  components:{
    ImageContainer
  },
  methods: {
    getImageData(){
      this.$post('/ImageData',{
        fileName:'images'
      }).then(res=>{
        this.imgData=res.data.imgArr
        console.log(this.imgData)
      })
    }
  },
  mounted(){
    this.getImageData()
  }
};
</script>
<style lang="scss" scoped>
.Image-Page{
  width:100vw;
  height: auto;
  background-color: #F8F8F9
}
</style>