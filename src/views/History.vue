<template>
  <div id="history">
    <!-- <ul>
      <li v-for="(history, index) in historys" :key="index">{{ history.name }} / {{ history.score }}</li>
    </ul>-->
    <div class="content">
      <!--  -->
      <div class="score">
        <div v-if="historys == 0" class="no-history">No History</div>
        <div v-else class="history-section">
          <div class="card-score" v-for="(history, index) in historys" :key="index">
            <!-- <svg src="../assets/img/profile.svg" alt="profile" /> -->
            <div class="name">
              <svg
                width="1000px"
                height="1000px"
                viewBox="0 0 1000 1000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <g>
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M3144.5,4985.6l-42.1-34.5l23-587.6c13.4-323.5,17.2-610.6,11.5-635.5c-19.1-78.5-97.6-82.3-231.6-11.5c-63.2,32.5-137.8,59.3-166.5,59.3c-103.4,0-101.4-30.6,36.4-654.6l128.2-580l9.6-650.8l11.5-650.8l90-254.6c114.8-321.6,181.8-461.3,323.5-673.8c147.4-220.1,375.2-447.9,589.5-589.5c91.9-59.3,164.6-118.7,162.7-128.2c-1.9-11.5-9.6-59.3-17.2-107.2l-11.5-90l-290.9-7.7c-246.9-7.6-313.9-17.2-446-59.3c-183.8-61.3-344.5-162.7-480.4-302.4c-166.5-172.3-1052.7-1355.2-1125.5-1500.6c-111-225.9-124.4-308.2-124.4-819.2c0-591.5,34.5-731.2,241.2-1008.7c135.9-179.9,402-365.6,587.6-411.5l51.7-13.4v446c0,409.6,3.8,453.6,38.3,509.2c101.4,166.5,302.4,183.8,440.2,34.5l47.9-51.7l9.6-490l9.6-491.9l1871.9-5.7l1870-3.8v455.5c0,434.5,1.9,459.4,44,539.8c103.4,201,367.5,201,474.7,0c32.5-59.3,36.4-114.8,36.4-520.6c0-522.5-19.1-480.4,199.1-424.9c315.8,82.3,604.8,310.1,754.1,595.3c126.3,245,141.7,340.7,134,886.2c-5.7,449.8-7.6,474.7-55.5,606.8c-28.7,76.6-84.2,187.6-124.4,248.8C8109.5-2220.9,7045.3-950,6957.3-881.1c-114.8,91.9-306.3,191.4-434.5,225.9c-63.2,17.2-218.2,38.3-344.5,44l-227.8,13.4l-15.3,76.6c-7.6,42.1-19.1,95.7-24.9,118.7c-7.7,34.5,17.2,59.3,149.3,151.2c212.5,149.3,403.9,348.4,557,576.1c141.6,216.3,202.9,340.7,319.6,666.1l82.3,229.7l7.7,966.6c3.8,677.6,0,1001-15.3,1081.4c-72.7,373.2-367.5,708.2-746.5,847.9l-143.6,51.7l-786.7,5.7l-788.6,5.8l-178,227.8c-218.2,277.5-290.9,312-352.2,164.6c-26.8-61.3-59.3-88.1-112.9-88.1c-13.4,0-134,90-268,201c-287.1,239.3-411.5,335-432.6,335C3194.2,5020,3167.4,5004.7,3144.5,4985.6z"
                    />
                  </g>
                </g>
              </svg>
              <p class="user-name">
                <!-- <strong>Name: &emsp;</strong> -->
                {{ history.name }}
              </p>
            </div>
            <p class="user-score">
              <!-- <strong>Score:&emsp;</strong> -->
              {{ history.score }}
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="menu-button">
        <ButtonToGame />
        <ButtonToHistory />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonToGame from "../components/BunttonGame";
import ButtonToHistory from "../components/BunttonHistory";

export default {
  name: "history",
  computed: {
    historys() {
      return this.$store.state.history;
    }
  },
  components: {
    ButtonToGame,
    ButtonToHistory
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: gray;
  min-height: 100%;

  .menu-button {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    // border: (var(--b));
    width: 60%;
    padding: 2rem 0;
  }

  .score {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background: chartreuse;
    width: 80%;

    .no-history {
      font-size: 5rem;
      font-weight: bold;
      color: #fafaf6;
    }

    .history-section {
      width: 60%;
      height: 50%;
      // border: (var(--b));
      overflow-y: scroll;
      position: fixed;
      padding: 1rem;

      &::-webkit-scrollbar {
        // width: 20px;
        display: none;
      }

      // &::-webkit-scrollbar-track {
      //   box-shadow: inset 0 0 5px grey;
      //   border-radius: 10px;
      // }

      // /* Handle */
      // &::-webkit-scrollbar-thumb {
      //   background: red;
      //   border-radius: 10px;
      // }

      // /* Handle on hover */
      // &::-webkit-scrollbar-thumb:hover {
      //   background: #b30000;
      // }

      .card-score {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        min-width: 30%;
        padding: 0 2rem;
        color: #2f89fc;
        flex-wrap: wrap;
        // border-left: 10px solid #ffa45c;
        font-size: 2rem;
        font-weight: bold;
        background: #f5f5f5;
        border-radius: 20px;
        // border: 2px solid #f2a2e4;

        .name {
          display: flex;
          align-items: center;
          svg {
            width: 48px;
            height: 48px;
            margin-right: 20px;
            fill: #30e3ca;
          }
          .user-name {
          }
        }

        .user-score {
          font-size: 3rem;
        }
      }

      .card-score + .card-score {
        margin-top: 1rem;
      }
    }
  }
}
</style>
