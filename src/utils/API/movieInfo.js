/**
 * 这个文件专门对接后端的电影相关的接口
 */

import axiosInstance from "../axiosInstance.js";

const movieInfo = {
  /**
   * 获取最受欢迎的电影
   */
  getPraiseMovie() {
    // http://www.softeem.xin:9999/movie-info/getPraiseMovie
    return axiosInstance.get("/movie-info/getPraiseMovie");
  },
  /**
   * 分页获取电影信息
   */
  getListByPage({ pageIndex, tags, movie_name }) {
    return axiosInstance.get("/movie-info/getListByPage", {
      params: {
        pageIndex,
        tags,
        movie_name,
      },
    });
  },
  findById(id) {
    return axiosInstance.get(`/movie-info/findById/` + id);
  },
  searchMovie(idx, keyword) {
    return axiosInstance.get(
      `http://www.softeem.xin:9999/movie-info/search?pageIndex=${idx}&keyword=${keyword}`
    );
  },
};

export default movieInfo;
