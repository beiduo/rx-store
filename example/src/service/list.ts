import createService from '../createService'

export const getList = (payload = {}) =>
    createService(
        {
            url: '/api/list',
            method: 'GET',
            payload,
        },
        {
            data: ['item1: ' + Math.random(), 'item2: ' + Math.random(), 'item3: ' + Math.random()],
        },
    )
