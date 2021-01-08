// 主要是一些组件注册和插件注册
import router from '../router';
import store from '../store';
import { Button, Form, Field, Tabbar, TabbarItem } from 'vant';

export const install = function(app: any): void {
	// 路由和store 注册
	app.use(router).use(store).use(Button).use(Form).use(Field).use(Tabbar).use(TabbarItem);
};
