export interface Config {
	dev: string;
	prod: string;
}

export const config: Config = {
    // 生产环境
	prod: location.origin + '/jdy/',
	dev: '/api'
};

export interface GlobalConfig {
	token: string;
	csrfToken?: string;
}

export const globalConfig: GlobalConfig = {
	token: 'appKey',
	csrfToken: 'csrfToken'
};
