

import { get,post } from './http'

let baseURL=''
const BASE = '/api'  // 开发
// const BASE = '' // 生产

export const apiAddress = p => get('/user/repos', p);
// export const apiAddress = p => get(`${BASE}https://www.zhihu.com/api/v4/me?include=ad_type`, p);
// export const apiAddress = p => get('~${BASE}~https://www.zhihu.com/api/v4/me?include=ad_type', p);









