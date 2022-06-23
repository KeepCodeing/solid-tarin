<template>
  <page-view class="bg-gray-100 movie-page">
    <!-- 标题栏 -->
    <title-bar>
      华夏影院
      <template #right>
        <img @click="$router.push('/login')" src="../assets/img/menu.svg" />
      </template>
    </title-bar>
    <!-- 分类盒子 -->
    <ul class="bg-white type-tag">
      <li
        v-for="(item, index) in typeTagList"
        :key="index"
        @click="typeTagIndex = index"
        :class="{ active: typeTagIndex == index }"
      >
        {{ item }}
      </li>
      <!-- 在这里添加一个li，然后放一个搜索的图标在右边 -->
      <li class="right-search-icon">
        <img
          src="../assets/img/search.svg"
          alt=""
          @click="$router.push({ name: 'search' })"
        />
      </li>
    </ul>
    <!-- 剩下的空间全部给下面的盒子 -->
    <div class="content-box">
      <!-- 最受欢迎的电影 -->
      <div class="px-[10px] bg-white pb-[15px]">
        <p class="text-[12px] text-gray-700 py-[10px]">最受好评的电影</p>
        <div class="flex overflow-auto praise-list">
          <!-- 每一项的电影信息 -->
          <div
            class="w-[90px] praise-item flex-shrink-0"
            v-for="item in praiseMovieList"
            :key="item.id"
          >
            <div class="h-[110px] relative">
              <img
                class="w-full h-full"
                :src="baseURL + item.movie_pc"
                alt=""
              />
              <p
                class="
                  text-yellow-500 text-[12px]
                  absolute
                  bottom-[2px]
                  left-[4px]
                  font-bold
                "
              >
                观众评分 {{ item.movie_score }}
              </p>
            </div>
            <p class="text-[12px] font-bold truncate py-[5px]">
              {{ item.movie_name }}
            </p>
          </div>
        </div>
      </div>
      <!-- 热门电影列表 -->
      <hotMovieList></hotMovieList>
    </div>
  </page-view>
</template>
<script setup>
import titleBar from "../components/title-bar.vue";
import { ref, reactive, inject } from "vue";
import API from "../utils/API/index.js";
import hotMovieList from "../components/hotMovieList.vue";

//定义一个数组
const typeTagList = reactive(["热映", "影院", "待映", "经典电影"]);
const typeTagIndex = ref(0);

//注入全局参数
let baseURL = inject("baseURL");

//定义一个变量,用于保存最受欢迎的电影
const praiseMovieList = ref([]);
API.movieInfo.getPraiseMovie().then((result) => {
  if (result.status == "success") {
    //服务器返回的数据是成功的
    praiseMovieList.value = result.data;
  } else {
    //服务器返回的数据是失败的
  }
});
</script>


<style scoped lang="scss">
@import "../assets/scss/comm.scss";
.type-tag {
  height: 45px;
  border-bottom: 1px solid lightgray;
  display: flex;
  list-style-type: none;
  li {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #666666;
    font-size: 14px;
    position: relative;
    &.active {
      font-size: 17px;
      color: #333333;
      &::after {
        content: "";
        height: 2px;
        background-color: $primaryColor;
        width: 20px;
        position: absolute;
        bottom: 2px;
      }
    }
  }
  position: relative;
  .right-search-icon {
    position: absolute;
    right: 5px;
    height: 100%;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.movie-page {
  display: flex;
  flex-direction: column;
}
.content-box {
  flex: 1;
  overflow: auto;
  .praise-list {
    &::-webkit-scrollbar {
      display: none;
    }
    /*
    .praise-item:not(:first-child){
      margin-left: 10px;
    }
    */
    .praise-item + .praise-item {
      margin-left: 5px;
    }
  }
}
</style>