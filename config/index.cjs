/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'server-chan',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1da1679e6f7d20cf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd2575cd0bfcce2541966510b8b97b0a1',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小狗',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otWqO5_IUtO8Q-KpPUahQN0ESjpg',
      // id: 'SCT177944TzJYkeyzloKsUFKfSeULYrC4t',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TvXLSwxy7kdEG10VA59Ah7-tZ-4CBp0NpKFt2RkvC1k',
      // useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小狗', year: '1999', date: '10-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小狗', year: '1999', date: '11-10',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2019', date: '02-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-02-22' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'eXp8pelxvjTiFA3F50h1TEZ0XVc_rzL0-b_muwp6mmI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otWqO5_IUtO8Q-KpPUahQN0ESjpg',
    }
  ],

}

module.exports = USER_CONFIG

