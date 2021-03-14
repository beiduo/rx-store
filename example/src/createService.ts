import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { Subscription, Observable, from, of } from 'rxjs'

import store from './store'

/**
 * 处理请求状态
 * @param res 请求response
 */
export const handleStatus = (res: any) => {
    if (res.error) {
        throw new Error(res.message || res.msg || '未知错误')
    }

    return res.data || res.message || true
}

/**
 * 创建服务
 * @param param0
 */
export default function createService(
    {
        url = '',
        method = 'POST',
        payload = {},
        headers = {},
        resMapper = (res: any) => res,
        skipAuth = false,
    }: {
        /** 请求url */
        url: string
        /** 请求方法 */
        method?: string
        /** 请求数据 */
        payload?: any
        /** 自定义请求头 */
        headers?: any
        /** 处理response */
        resMapper?: (res: any) => any
        /** 是否不需要传递token */
        skipAuth?: boolean
    },
    /** mock数据 */
    mock?: any,
): Observable<any> {
    const { token } = store.auth.subject.getValue()

    if (mock) {
        return from(
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(mock.data)
                }, 2000)
            }),
        )
    }

    const cfg = {
        url,
        method,
        body: {
            ...payload,
        },
        headers: {
            'Content-Type': 'application/json',
            token: token,
            ...headers,
        },
    } as any

    return ajax(cfg).pipe(
        map((res) => {
            return res.response
        }),
        map(handleStatus),
        map(resMapper),
        map((res) => res),
        catchError((error) => {
            console.log('error: ', error)
            return of({
                error: error.message || 'unkown error',
            })
        }),
    )
}

export type RequestFunc = (payload?: any, callback?: (res?: any) => void | any) => Subscription
