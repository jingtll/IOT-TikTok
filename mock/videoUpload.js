// mock/videoUpload.js
import Mock from 'mockjs'

// 模拟「视频上传」接口（POST /api/upload/video）
export default [
  {
    url: '/api/upload/video', // 接口地址（和前端请求地址一致）
    method: 'post', // 请求方法（视频上传用 POST）
    // 模拟接口响应逻辑
    response: ({ body }) => {
      // 模拟后端接收 FormData（这里仅打印，验证参数是否正确）
      console.log('Mock 接收到的上传参数：', body)

      // 模拟随机成功/失败（可选，方便测试不同场景）
      const isSuccess = Mock.Random.boolean(0.8) // 80% 概率成功

      if (isSuccess) {
        return {
          code: 200,
          msg: '视频上传成功',
          data: {
            videoId: Mock.Random.id(), // 模拟返回视频 ID
            videoUrl: 'https://mock.com/video/' + Mock.Random.string(10) // 模拟视频地址
          }
        }
      } else {
        return {
          code: 500,
          msg: Mock.Random.pick(['服务器繁忙', '视频格式不支持', '文件过大']), // 随机失败原因
          data: null
        }
      }
    }
  }
]