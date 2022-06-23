<template>
  <!-- 电影列表 -->
  <van-list
    class="bg-white mt-[5px] movie-list"
    v-model:loading="isLoading"
    loading-text="正在加载电影数据···"
    finished-text="我是有底线的"
    @load="loadNextPage"
    :finished="queryParams.pageIndex >= resultData.pageCount"
  >
    <div
      class="flex h-[90px] p-[5px]"
      v-for="item in resultData.listData"
      :key="item.id"
      @click="toMovieDetail(item.id)"
    >
      <div class="w-[75px]">
        <!-- 这里要阻止事件冒泡 stopPropagation -->
        <img
          @click.stop="ImagePreview([baseURL + item.movie_pc])"
          class="w-full h-full"
          :src="baseURL + item.movie_pc"
          alt=""
        />
      </div>
      <ul
        class="
          flex-1 flex flex-col
          justify-between
          text-[12px]
          px-[10px]
          list-none
        "
      >
        <li class="font-bold text-[18px]">{{ item.movie_name }}</li>
        <li>
          观众评：
          <span class="text-[14px] text-warningColor font-bold">{{
            item.movie_score
          }}</span>
        </li>
        <li>主演：{{ item.role }}</li>
        <li>上映时间：{{ item.publicTime }}</li>
      </ul>
      <div class="w-[70px] flex items-center justify-center">
        <button
          type="button"
          class="btn-buy"
          v-if="item.publicTime < new Date().toLocaleDateString()"
        >
          购票
        </button>
        <button type="button" class="btn-presale" v-else>预售</button>
      </div>
    </div>
  </van-list>
</template>
<script setup>
import API from "../utils/API/index.js";
import { ref, reactive, inject } from "vue";
import { ImagePreview } from "vant";
import { useRouter } from "vue-router";

//获取路由管理对象
const router = useRouter();
//这个时候，这里的router就相当于template里面的$router

const baseURL = inject("baseURL");
// 定义请求参数
const queryParams = reactive({
  pageIndex: 1,
  tags: "",
  movie_name: "",
});

//用于表示是否正在请求数据
const isLoading = ref(false);

//分页请求数据
const resultData = reactive({
  listData: [],
  pageCount: 0,
});

const queryData = () => {
  isLoading.value = true;
  API.movieInfo
    .getListByPage(queryParams)
    .then((result) => {
      // resultData.listData = result.data.listData;
      // 保存之前的数据，追加新的数据
      resultData.listData = resultData.listData.concat(result.data.listData);
      resultData.pageCount = result.data.pageCount;
    })
    .finally(() => {
      //数据要是请求完成了，我们就把加载状态取消
      isLoading.value = false;
    });
};
queryData();

//上拉加载下一页
const loadNextPage = () => {
  // 第一步：把页码+1
  queryParams.pageIndex++;
  // 第二步：再次调用方法，去查询数据
  queryData();
};

//去电影详细页
const toMovieDetail = (id) => {
  //我要在这里获取点击以的电影的id，然后再传递到下一个页面
  console.log(id);
  router.push({
    name: "movieDetail",
    query: {
      id: id,
    },
  });
};
</script>
<style scoped lang="scss">
.btn-buy {
  @apply w-[60px] text-white  text-[12px] h-[30px] border-none bg-primaryColor rounded-[18px];
}
.btn-presale {
  @extend .btn-buy;
  @apply bg-secondColor;
}
</style>