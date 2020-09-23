<template>
  <div id="loading-wrapper" :class="{ fadeout: !isLoading }">
    <div id="loading-text">Загрузка...</div>
    <div id="loading-content"></div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
  name: "LoadingScreen"
}
</script>

<style scoped>
#loading-wrapper {
  z-index: 10000;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#loading-text {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 30px;
  margin: -13px 0 0 -48px;
  text-align: center;
  font-size: 20px;
}

#loading-content {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  border: 3px solid #F00;
}

#loading-content {
  border: 3px solid transparent;
  border-top-color: rgb(80, 225, 216);
  border-bottom-color: rgb(80, 225, 216);
  border-radius: 50%;
  animation: loader 2s linear infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>