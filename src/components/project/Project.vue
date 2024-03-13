<template>
    <section>
      <div class="container-fluid">
        <div class="flex-justify d-block">
          <div class="col-4 col-full">
            <div class="item">
              <div class="img">
                <img :src="cros" :alt="cros">
              </div>
              <div class="info">
                <h6 class="count">2562</h6>
                <p>Projects</p>
              </div>
            </div>
          </div>
          <div class="col-4 col-full">
            <div class="item">
              <div class="img">
                <img :src="cros" :alt="cros">
              </div>
              <div class="info">
                <h6>$<span class="count">156</span>M</h6>
                <p>Total Funding</p>
              </div>
            </div>
          </div>
          <div class="col-4 col-full">
            <div class="item">
              <div class="img">
                <img :src="cros" :alt="cros">
              </div>
              <div class="info">
                <h6><span class="count">56954</span></h6> 
                <p>Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import cros from '../../assets/images/cros.png';
  export default {
    name: 'Project',
    components: {

    },
    data() {
      return {
        cros: cros,
      }
    },
    mounted() {

    },
    methods: {

    }
  }
  </script>
  
  <style scoped>
  .item {
    display: flex;
    align-items: stretch;
    gap: 10px;
    justify-content: center;
  }
  
  h6 {
    font-size: 48px;
    font-weight: 900;
    line-height: 30px;
  }
  
  p {
    font-size: 20px;
    color: #ffffff50;
    padding-top: 20px;
  }
  @media (min-width:300px) and (max-width:575px) {
    .d-block{
      display: block !important;
    }
    .item{
      margin-bottom: 50px;
      justify-content: space-between;
      background: #1313138c;
      padding: 10px;
    }
    h6{
      font-size: 28px;
    }
    p{
      font-size:14px
    }
  }
  @media (min-width:576px) and (max-width:999px) {

    h6{
      font-size: 28px;
    }
    p{
      font-size:14px
    }
  }
  </style>
  