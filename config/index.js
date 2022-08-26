export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx0b34c6dae61c0624",
    // 公众号appSecret
    appSecret: "69a73f67f2bc38d5b0f71ac024a89352",
    // 模板消息id
    templateId: "4ZxYyi0sGnUh_25ZMMeIuAu_24i2vA9pTjufWYhPYUw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["olsFB5255W4IqzfAKHalubfCwjW4"],
     
    // 信息配置
    // 所在省份
    province: "江西",
    // 所在城市
    city: "赣州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "2001", "date": "06-05", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-02-12"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
