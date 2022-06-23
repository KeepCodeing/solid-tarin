<template>
  <page-view class="flex flex-col">
    <van-search
      background="#F7504D"
      shape="round"
      placeholder="请输入关键字"
      v-model="keyword"
      show-action
    >
      <template #left>
        <img
          src="../assets/img/left-arrow.svg"
          class="mr-[10px]"
          @click="$router.back()"
          alt=""
        />
      </template>
      <template #action>
        <div class="text-[14px] text-white" @click="() => loadSearchData()">
          搜索
        </div>
      </template>
    </van-search>
    <div class="flex-1 overflow-auto content-box">
      <van-list
        v-model:loading="loading"
        :finished="idx >= movieData.pageCount"
        finished-text="没有更多了"
        @load="loadNextPage"
      >
        <div class="grid grid-cols-4 gap-3">
          <div
            :class="['relative', 'col-span-1', ' w-50']"
            v-for="item in movieData.data"
            :key="item.id"
          >
            <img
              class="w-full h-full"
              :src="'http://www.softeem.xin:9999' + item.movie_pc"
            />
            <span class="absolute bottom-0 text-sm text-yellow-300 right-3"
              >评分：{{ item.movie_score }}</span
            >
          </div>
        </div>
      </van-list>
      <!-- 默认情况下是没有数据的 -->
      <van-empty
        v-if="!movieData.data.length"
        description="暂无数据"
      ></van-empty>
    </div>
  </page-view>
</template>
<script setup>
// 调用接口，请求数据，渲染页面
import API from "../utils/API";
import { ref, reactive } from "vue";

const idx = ref(1);
const keyword = ref("");
const movieData = reactive({ data: [], pageCount: 0 });
const loading = ref(false);

const loadSearchData = async (pIdx = -1) => {
  loading.value = true;
  const { data } = await API.movieInfo.searchMovie(
    pIdx === -1 ? idx.value : pIdx,
    keyword.value
  );
  movieData.data.push(...data.listData);
  movieData.pageCount = data.pageCount;
  loading.value = false;
};

const loadNextPage = () => {
  if (idx.value < movieData.pageCount) idx.value++;
  loadSearchData(idx.value);
};
</script>
<style scoped>
</style>