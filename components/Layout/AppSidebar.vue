<template>
  <a-layout-sider
    :style="{
      overflow: 'auto',
      maxWidth: '230px',
      width: '230px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      paddingTop: '5rem',
    }"
  >
    <a-row class="restaurant">
      Restuarants <span class="coming"> Coming Soon </span>
    </a-row>
    <a-row class="category"> Categories </a-row>
    <a-row class="category"> Price range </a-row>
  </a-layout-sider>
</template>

<script>
export default {};
</script>

<style>
.ant-layout-sider {
  position: relative;
  min-width: 0;
  transition: all 0.5s;
  border-right: 1px solid #e8e8e8;
  background: rgba(242, 242, 242, 0.8) !important;
}

.restaurant {
  font-weight: 700;
  font-size: 20px;
  color: #c4c4c4;
  margin: 12px 0;
  padding: 0 15px;
}

.category {
  font-weight: 700;
  font-size: 20px;
  margin: 12px 0;
  padding: 0 15px;
}

.coming {
  color: #c22429;
  font-weight: 600;
  font-size: 10px;
}
</style>