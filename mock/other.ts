import type {MockMethod} from 'vite-plugin-mock'

export default [
  {
    url: '/web/api/timeout',
    method: 'post',
    timeout: 10000,
    response: ({body}) => {
      console.log(body)
      return {
        code: 0,
        msg: 'success',
        data: {
          token: 'eyJhbGciInR5cCI6IkpXVCJ9.eyJpZzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1OTYwMTU1OX0.NemTFPTtHDO23e39NYUPk8',
          uid: '6281d355ebd7058a7e93c82c',
          username: 'admin'
        }
      }
    }
  },
  {
    url: '/web/api/delay',
    method: 'post',
    timeout: 3000,
    response: ({body}) => {
      console.log(body)
      return {
        code: 0,
        msg: 'success',
        data: {
          token: 'eyJhbGciInR5cCI6IkpXVCJ9.eyJpZzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1OTYwMTU1OX0.NemTFPTtHDO23e39NYUPk8',
          uid: '6281d355ebd7058a7e93c82c',
          username: 'admin'
        }
      }
    }
  },
] as MockMethod[]
