// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
    hash: true,
    antd: {},
    outputPath: `../templates/TyAdmin/`,
    publicPath: REACT_APP_ENV === 'dev' ? '/' : '/static/TyAdmin/',
    dva: {
        hmr: true,
    },
    locale: {
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        antd: true,
        baseNavigator: true,
    },
    dynamicImport: {
        loading: '@/components/PageLoading/index',
    },
    targets: {
        ie: 11,
    },
    // umi routes: https://umijs.org/docs/routing
    routes: [{
            path: '/xadmin/login',
            component: '../layouts/UserLayout',
            routes: [{
                name: 'login',
                path: '/xadmin/login',
                component: './TyAdminBuiltIn/UserLogin',
            }, ],
        },
        {
            path: '/xadmin/',
            component: '../layouts/SecurityLayout',
            routes: [{
                    path: '/xadmin/',
                    component: '../layouts/BasicLayout',
                    authority: ['admin', 'user'],
                    routes: [{
                            name: '首页',
                            path: '/xadmin/index',
                            icon: 'dashboard',
                            component: './TyAdminBuiltIn/DashBoard',
                        },
                        {
                            path: '/xadmin/',
                            redirect: '/xadmin/index',
                        },
                        {
                      name: '用户信息',
                      icon: 'smile',
                      path: '/xadmin/user_profile',
                      component: './AutoGenPage/UserProfileList',
                   },{
                      name: '短信验证',
                      icon: 'smile',
                      path: '/xadmin/verify_code',
                      component: './AutoGenPage/VerifyCodeList',
                   },{
                      name: '商品类别',
                      icon: 'smile',
                      path: '/xadmin/goods_category',
                      component: './AutoGenPage/GoodsCategoryList',
                   },{
                      name: '宣传品牌',
                      icon: 'smile',
                      path: '/xadmin/goods_category_brand',
                      component: './AutoGenPage/GoodsCategoryBrandList',
                   },{
                      name: '商品信息',
                      icon: 'smile',
                      path: '/xadmin/goods',
                      component: './AutoGenPage/GoodsList',
                   },{
                      name: '商品轮播',
                      icon: 'smile',
                      path: '/xadmin/goods_image',
                      component: './AutoGenPage/GoodsImageList',
                   },{
                      name: '首页轮播',
                      icon: 'smile',
                      path: '/xadmin/banner',
                      component: './AutoGenPage/BannerList',
                   },{
                      name: '首页广告',
                      icon: 'smile',
                      path: '/xadmin/index_ad',
                      component: './AutoGenPage/IndexAdList',
                   },{
                      name: '热搜排行',
                      icon: 'smile',
                      path: '/xadmin/hot_search_words',
                      component: './AutoGenPage/HotSearchWordsList',
                   },{
                      name: '购物车喵',
                      icon: 'smile',
                      path: '/xadmin/shopping_cart',
                      component: './AutoGenPage/ShoppingCartList',
                   },{
                      name: '订单信息',
                      icon: 'smile',
                      path: '/xadmin/order_info',
                      component: './AutoGenPage/OrderInfoList',
                   },{
                      name: '订单商品',
                      icon: 'smile',
                      path: '/xadmin/order_goods',
                      component: './AutoGenPage/OrderGoodsList',
                   },{
                      name: '用户收藏',
                      icon: 'smile',
                      path: '/xadmin/user_fav',
                      component: './AutoGenPage/UserFavList',
                   },{
                      name: '收货地址',
                      icon: 'smile',
                      path: '/xadmin/user_address',
                      component: './AutoGenPage/UserAddressList',
                   },{
                      name: '用户留言',
                      icon: 'smile',
                      path: '/xadmin/user_leaving_message',
                      component: './AutoGenPage/UserLeavingMessageList',
                   },{
                      name: '版本信息',
                      icon: 'smile',
                      path: '/xadmin/version_control',
                      component: './AutoGenPage/VersionControlList',
                   },
                        {
                            name: 'Tyadmin内置',
                            icon: 'VideoCamera',
                            path: '/xadmin/sys',
                            routes: [{
                                name: 'TyAdmin日志',
                                icon: 'smile',
                                path: '/xadmin/sys/ty_admin_sys_log',
                                component: './TyAdminBuiltIn/TyAdminSysLogList',
                            }, {
                                name: 'TyAdmin验证',
                                icon: 'smile',
                                path: '/xadmin/sys/ty_admin_email_verify_record',
                                component: './TyAdminBuiltIn/TyAdminEmailVerifyRecordList',
                            }],
                        },
                        {
                            component: './404',
                        },
                    ],
                },
                {
                    component: './404',
                },
            ],
        },
        {
            component: './404',
        },
    ],
    // Theme for antd: https://ant.design/docs/react/customize-theme-cn
    theme: {
        // ...darkTheme,
        'primary-color': defaultSettings.primaryColor,
    },
    // @ts-ignore
    title: false,
    ignoreMomentLocale: true,
    proxy: proxy[REACT_APP_ENV || 'dev'],
    manifest: {
        basePath: '/',
    },
});