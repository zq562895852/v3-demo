/**
 * 请求封装
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { config, globalConfig } from '../config/index';
// useRouter useRoute 不能独立于setup函数使用，必须在setup中才能拿到路由对象，fuck
// import { useRouter } from 'vue-router';
import router from '../router/index'
import { Toast } from 'vant';
// 环境
const env = process.env.NODE_ENV === 'production';
// 基础请求路径
const baseUrl = env ? config.prod : config.dev;
// 登录超时状态码
const errCode: number[] = [403, 404, 405, 406, 407];
// 登录超时处理
const loginTimeOut = (code: number): boolean => {
	if (errCode.includes(code)) {
		Toast.fail('登录超时，请重新登录');
		// 去登录页
		router.push('/login');
		return true;
	}
	return false;
};
// 封装类
export default class HttpRequest {
	constructor(public baseUrl: string) {
		// 基础路径
		this.baseUrl = baseUrl;
    };

    request(options: AxiosRequestConfig): AxiosPromise {
        // 这样每次请求都会创建一个实例，也可以HttpRequest实例化挂载一次，这样就要在构造函数中挂载
		const instance: AxiosInstance = axios.create();
        options = this.mergeConfig(options);
		this.interceptors(instance);
        return instance(options);
    }

	get(url: string, config: AxiosRequestConfig = {}) {
		return this.request({ url, ...config });
    }

    post(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
        // data是请求参数，请求的时候不知道传入的数据是啥，类型也未知所以给个any
		return this.request({ url, data, ...config });
    }

	private interceptors(instance: AxiosInstance) {
		// 拦截器
		// instance 实例
		// 请求拦截器
		instance.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				const csrfToken = window.sessionStorage.getItem(globalConfig.csrfToken as string);
				const token = window.sessionStorage.getItem(globalConfig.token);
				config.headers.common.Authorization = `Basic-${token}`;
				config.headers.common.csrftoken = csrfToken;
				return config;
			},
			(error) => {
				Toast.fail('请求错误');
				return Promise.reject(error);
			}
		);
		// 响应拦截器
		instance.interceptors.response.use(
			(response: AxiosResponse) => {
				const data = response.data;
				const resp = data.resp;
				const code: number = resp.code;
				const method = response.config.method;
				if (method === 'post') {
					const csrftoken = response.headers.csrftoken;
					if (csrftoken) {
						// 设置请求头
						sessionStorage.setItem(globalConfig.csrfToken as string, csrftoken);
					}
				}
				// 登录超时直接到登录页
				return loginTimeOut(code) ? response : resp;
			},
			(error) => {
				Toast.fail('服务器错误');
				return Promise.reject(error);
			}
		);
    }

	mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
		return Object.assign({ baseUrl: this.baseUrl }, options);
	}
}

export const http = new HttpRequest(baseUrl);
