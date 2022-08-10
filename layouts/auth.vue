<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active,
.ant-btn.active {
  text-decoration: none;
  background: #c22429a1 !important;
  color: white !important;
}

.ant-select-dropdown.ant-select-dropdown--single.ant-select-dropdown-placement-bottomLeft {
  max-width: 385px;
}

.ant-input {
  background: white;
  border-radius: 5px !important;
  /* border: none !important; */
  height: 38px;
}
</style>
