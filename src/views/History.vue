script<template>
  <div id="history">
    <!-- <ul>
      <li v-for="(history, index) in historys" :key="index">{{ history.name }} / {{ history.score }}</li>
    </ul>-->
    <div class="content">
      <!--  -->
      <div class="score">
        <div v-if="historys == 0" class="no-history">No History</div>
        <div v-else class="history-section">
          <div class="card-score" v-for="(history, index) in historys.slice(0, 10)" :key="index">
            <div class="name">
              <div class="history-no">
                <p>{{ index + 1}}</p>
              </div>
              <p class="user-name">
                <!-- <strong>Name: &emsp;</strong> -->
                &nbsp;{{ history.name }}
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
      let data = this.$store.state.history;

      /* 
      // Cr: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value  
      //  เรียงลำดับข้อมูลจาก โดยอิงจาก score 
      //  เงื่อนไขเรียงจาก มาก ไป น้อย
      */
      let a = data.sort((a, b) => {
        if (a.score < b.score) {
          return -1;
        }
        if (a.score > b.score) {
          return 1;
        }
        return 0;
      });

      return a.reverse();
    }
  },
  components: {
    ButtonToGame,
    ButtonToHistory
  },
  methods: {}
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
        padding: 1rem;
        // border: 2px solid #f2a2e4;

        .history-no {
          background: #22d1ee;
          padding: 1rem;
          border-radius: 50%;
          height: 1em;
          width: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #e2f3f5;
        }

        .name {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

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

//  Media Screen Section
@media screen and (max-width: 380px) {
  .content {
    .score {
     

      .history-section {
        min-width: 80%;

        .card-score {
          flex-direction: column;
          .name {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
