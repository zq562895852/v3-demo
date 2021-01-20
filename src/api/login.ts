import { AxiosPromise } from 'axios';
import { http } from './index';

interface LoginReqParams {
    name: string;
}

interface ResponseData {
	code: number;
	data?: any;
	msg: string;
}

export const loginReq = (data: LoginReqParams): AxiosPromise<ResponseData> => {
	return http.post('api/h5/login/msg-login', data);
};
