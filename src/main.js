import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router"
import store from './store';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// //在main.js设置全局的请求次数，请求的间隙
// axios.defaults.retry = 0;
// axios.defaults.retryDelay = 1000;


// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//   const config = err.config;
//   // If config does not exist or the retry option is not set, reject
//   if(!config || !config.retry) return Promise.reject(err);

//   // Set the variable for keeping track of the retry count
//   config.__retryCount = config.__retryCount || 0;

//   // Check if we've maxed out the total number of retries
//   if(config.__retryCount >= config.retry) {
//     // Reject with the error
//     return Promise.reject(err);
//   }

//   // Increase the retry count
//   config.__retryCount += 1;

//   // Create new promise to handle exponential backoff
//   const backoff = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, config.retryDelay || 1);
//   });

//   // Return the promise in which recalls axios to retry the request
//   return backoff.then(function() {
//     return axios(config);
//   });
// });
