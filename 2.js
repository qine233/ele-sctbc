import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import fs from 'node:fs'
import axios from 'axios'
// const fs = require('fs'); 
export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '寝室电量',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#*寝室电量(.*)$',
          /** 执行方法 */
          fnc: 'hitokoto'
        }
      ]
    })
  }

  /**
   * #一言
   * @param e oicq传递的事件参数e
   */


  async hitokoto(e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
       let webkeywd = e.msg.replace(/#|寝室电量/gm, '');
     
    /** 一言接口地址 */
   
    /** 用接口获取数据 */
  // const  app_input = { school_code: '01240', rqType: 'electric', roomCode: "${webkeywd}"  }
  
        // 文档 https://axios-http.com/docs/post_example
    
        // 文档 https://axios-http.com/docs/post_example
         const res = await axios.post('查询地址', {
            school_code: '01240',
            rqType: 'electric',
            roomCode: `${webkeywd}`,
        });
   //  res = await res.json()
        logger.info(res.data)
       let deco = res.data
      //    logger.info(`[接口结果] 电量：${res}`) ;
          //   let testres = ${res} ;
   // res = await fetch(res).catch((err) => logger.error(err))
    
// const jsonres = JSON.stringify(res);
    

    /** 输入日志 */
   // logger.info(`[接口结果] 电量：${res.data}`);
    /** 最后回复消息 */
    await this.reply(`寝室${webkeywd}电量为${res.data.data.balance}度 `)
     await this.reply(`请节约用电哦！`)
  }
}
