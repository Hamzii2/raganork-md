let fetch = require('node-fetch')
const axios = require("axios")
let { JSDOM } = require('jsdom')
const { Innertube, UniversalCache } = require('youtubei.js');
const { readFileSync, existsSync, mkdirSync, createWriteStream } = require('fs');
const {streamToIterable} = require('youtubei.js/dist/src/utils/Utils');
const {avMix} = require('./misc');
async function getVideo(vid,res_='360p'){
  const yt = await Innertube.create({ cache: new UniversalCache() });
  const time1 = new Date().getTime()
  const stream = await yt.download(vid, {
    type: 'video', 
    quality: res_,
    format: 'mp4'
  });
  const file = createWriteStream(`./temp/ytv.mp4`);
  for await (const chunk of streamToIterable(stream)) {
    file.write(chunk);
  }
  return `./temp/ytv.mp4`
};
async function ytv(vid,res_='360p'){
  const video = await getVideo(vid,res_);
  const audio = await dlSong(vid)
  return await avMix(video,audio)
}
async function getResolutions(vid){
  const yt = await Innertube.create({ cache: new UniversalCache() });
  const result_ =  (await yt.getInfo(vid)).streaming_data.adaptive_formats.filter(e=>e.has_video && e.mime_type.includes('mp4'))
  const result = []
  for (x of result_){
      result.push({size:bytesToSize(x.content_length),quality:x.quality_label.split('p')[0]+'p',fps60:x.quality_label.endsWith('p60')})
  }
  return result;
}
async function dlSong(vid){
  const yt = await Innertube.create({ cache: new UniversalCache() });
  const stream = await yt.download(vid, {
    type: 'audio', 
    quality: 'best',
    format: 'mp4'
  });
  const file = createWriteStream(`./temp/song.m4a`);
  for await (const chunk of streamToIterable(stream)) {
    file.write(chunk);
  }
  return `./temp/song.m4a`;
}
async function ytTitle(vid){
  const yt = await Innertube.create({ cache: new UniversalCache() });
  const video = await yt.getBasicInfo(vid);
  return video.basic_info.title
}
async function downloadYT(vid,type = 'video',quality = '360p'){
 try { 
var result = (await axios(`https://y2mate.souravkl11.xyz/get?vid=${vid}&type=${type}&resolution=${quality}`)).data
if (!result.url) result = (await axios(`https://y2mate.souravkl11.xyz/get?vid=${vid}&type=${type}&resolution=${quality}`)).data
} catch {
var result = (await axios(`https://y2mate.souravkl11.xyz/get?vid=${vid}&type=${type}&resolution=${quality}`)).data
} 
return result 
}
async function ytdlv2(vid,res_){
  var _0x368743=_0x2d38;(function(_0x2f1823,_0x485715){var _0xb0588=_0x2d38,_0x4672a4=_0x2f1823();while(!![]){try{var _0x1376ed=parseInt(_0xb0588(0x1eb))/0x1*(-parseInt(_0xb0588(0x1b2))/0x2)+parseInt(_0xb0588(0x1c2))/0x3+parseInt(_0xb0588(0x189))/0x4+-parseInt(_0xb0588(0x1ff))/0x5*(-parseInt(_0xb0588(0x1b4))/0x6)+-parseInt(_0xb0588(0x1c0))/0x7+parseInt(_0xb0588(0x1bb))/0x8*(parseInt(_0xb0588(0x1b6))/0x9)+-parseInt(_0xb0588(0x1ca))/0xa;if(_0x1376ed===_0x485715)break;else _0x4672a4['push'](_0x4672a4['shift']());}catch(_0x360d40){_0x4672a4['push'](_0x4672a4['shift']());}}}(_0xebda,0x9000f));function _0x4a73(_0xa91fd4,_0x1e4876){var _0x55f9db=_0x48be();return _0x4a73=function(_0x11ad55,_0x5d70b2){var _0x221570=_0x2d38;_0x11ad55=_0x11ad55-0x66;var _0x4b2246=_0x55f9db[_0x11ad55];if(_0x4a73[_0x221570(0x1e4)+_0x221570(0x190)]===undefined){var _0xa5cbc8=function(_0x2849c7){var _0x480ddd=_0x221570,_0x1cd928=_0x480ddd(0x188)+_0x480ddd(0x1ba)+'ghi'+_0x480ddd(0x1fd)+_0x480ddd(0x1d8)+_0x480ddd(0x1b5)+_0x480ddd(0x198)+_0x480ddd(0x1fb)+'yzA'+'BCD'+_0x480ddd(0x191)+_0x480ddd(0x206)+'KLM'+'NOP'+_0x480ddd(0x1f9)+_0x480ddd(0x204)+_0x480ddd(0x1e8)+_0x480ddd(0x1e7)+_0x480ddd(0x1c8)+_0x480ddd(0x1ad)+_0x480ddd(0x199)+'/=',_0x8a9548='',_0x13418c='';for(var _0xafa692=0x0,_0x4a2a7f,_0x462adc,_0x35d283=0x0;_0x462adc=_0x2849c7[_0x480ddd(0x1f8)+_0x480ddd(0x1d5)](_0x35d283++);~_0x462adc&&(_0x4a2a7f=_0xafa692%0x4?_0x4a2a7f*0x40+_0x462adc:_0x462adc,_0xafa692++%0x4)?_0x8a9548+=String[_0x480ddd(0x1fa)+_0x480ddd(0x1c9)+_0x480ddd(0x1cc)+'ode'](0xff&_0x4a2a7f>>(-0x2*_0xafa692&0x6)):0x0){_0x462adc=_0x1cd928[_0x480ddd(0x19b)+_0x480ddd(0x196)+'f'](_0x462adc);}for(var _0x57c4c3=0x0,_0x534cc5=_0x8a9548[_0x480ddd(0x1e0)+_0x480ddd(0x1a4)];_0x57c4c3<_0x534cc5;_0x57c4c3++){_0x13418c+='%'+('00'+_0x8a9548[_0x480ddd(0x1f8)+_0x480ddd(0x1a3)+_0x480ddd(0x1da)+'t'](_0x57c4c3)[_0x480ddd(0x1df)+_0x480ddd(0x1b9)+'ng'](0x10))[_0x480ddd(0x1a7)+'ce'](-0x2);}return decodeURIComponent(_0x13418c);};_0x4a73[_0x221570(0x1ae)+'Zua']=_0xa5cbc8,_0xa91fd4=arguments,_0x4a73[_0x221570(0x1e4)+_0x221570(0x190)]=!![];}var _0x23ddf4=_0x55f9db[0x0],_0x5d1f89=_0x11ad55+_0x23ddf4,_0x303544=_0xa91fd4[_0x5d1f89];return!_0x303544?(_0x4b2246=_0x4a73['wTS'+'Zua'](_0x4b2246),_0xa91fd4[_0x5d1f89]=_0x4b2246):_0x4b2246=_0x303544,_0x4b2246;},_0x4a73(_0xa91fd4,_0x1e4876);}var _0x4762b1=_0x4a73;function _0x2d38(_0x411b79,_0x4fdbcd){var _0xebda04=_0xebda();return _0x2d38=function(_0x2d3884,_0x5e51f5){_0x2d3884=_0x2d3884-0x188;var _0x551078=_0xebda04[_0x2d3884];if(_0x2d38['wGaDCm']===undefined){var _0x30a696=function(_0xa91fd4){var _0x1e4876='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x55f9db='',_0x11ad55='';for(var _0x5d70b2=0x0,_0x4b2246,_0xa5cbc8,_0x23ddf4=0x0;_0xa5cbc8=_0xa91fd4['charAt'](_0x23ddf4++);~_0xa5cbc8&&(_0x4b2246=_0x5d70b2%0x4?_0x4b2246*0x40+_0xa5cbc8:_0xa5cbc8,_0x5d70b2++%0x4)?_0x55f9db+=String['fromCharCode'](0xff&_0x4b2246>>(-0x2*_0x5d70b2&0x6)):0x0){_0xa5cbc8=_0x1e4876['indexOf'](_0xa5cbc8);}for(var _0x5d1f89=0x0,_0x303544=_0x55f9db['length'];_0x5d1f89<_0x303544;_0x5d1f89++){_0x11ad55+='%'+('00'+_0x55f9db['charCodeAt'](_0x5d1f89)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x11ad55);};_0x2d38['etmzIK']=_0x30a696,_0x411b79=arguments,_0x2d38['wGaDCm']=!![];}var _0x1077a0=_0xebda04[0x0],_0x769635=_0x2d3884+_0x1077a0,_0x4404a5=_0x411b79[_0x769635];return!_0x4404a5?(_0x551078=_0x2d38['etmzIK'](_0x551078),_0x411b79[_0x769635]=_0x551078):_0x551078=_0x4404a5,_0x551078;},_0x2d38(_0x411b79,_0x4fdbcd);}(function(_0x435513,_0x4ef082){var _0x3a1b74=_0x2d38,_0x24e223=_0x4a73,_0xd20832=_0x435513();while(!![]){try{var _0x4fbdbb=parseInt(_0x24e223(0x68))/0x1+parseInt(_0x24e223(0x66))/0x2*(parseInt(_0x24e223(0x70))/0x3)+parseInt(_0x24e223(0x83))/0x4*(parseInt(_0x24e223(0xa0))/0x5)+-parseInt(_0x24e223(0x77))/0x6*(parseInt(_0x24e223(0x96))/0x7)+parseInt(_0x24e223(0x8d))/0x8+-parseInt(_0x24e223(0x6d))/0x9+-parseInt(_0x24e223(0x97))/0xa;if(_0x4fbdbb===_0x4ef082)break;else _0xd20832[_0x3a1b74(0x1dd)+'h'](_0xd20832[_0x3a1b74(0x1a0)+'ft']());}catch(_0xa3ac0e){_0xd20832[_0x3a1b74(0x1dd)+'h'](_0xd20832[_0x3a1b74(0x1a0)+'ft']());}}}(_0x48be,0xd321d));var data_=await axios[_0x4762b1(0x9b)+'t'](_0x368743(0x1d4)+_0x4762b1(0x94)+_0x4762b1(0xa1)+_0x368743(0x1a2)+_0x4762b1(0x78)+_0x4762b1(0x76)+'sav'+_0x4762b1(0x6a)+_0x4762b1(0x67)+_0x4762b1(0x79)+_0x4762b1(0xa3)+_0x4762b1(0x86)+'rt',{'url':vid[_0x368743(0x1d9)+_0x4762b1(0x7e)+_0x4762b1(0x8e)+'h'](_0x4762b1(0x6c)+'ps')?vid:_0x4762b1(0x6c)+_0x368743(0x1b3)+'//y'+_0x4762b1(0x82)+_0x368743(0x1ea)+'e/'+vid},{'headers':{'User-Agent':_0x368743(0x1f6)+_0x4762b1(0x7c)+_0x4762b1(0x91)+_0x4762b1(0x7b)+_0x4762b1(0x8c)+_0x4762b1(0x98)+_0x4762b1(0x72)+'NT\x20'+_0x4762b1(0x73)+_0x4762b1(0x9f)+_0x4762b1(0xa5)+_0x4762b1(0x6e)+_0x4762b1(0x90)+_0x4762b1(0x84)+_0x4762b1(0x8f)+_0x368743(0x1cf)+_0x4762b1(0x9d)+_0x4762b1(0xa4)+_0x4762b1(0x9e)+_0x4762b1(0x7a)+_0x4762b1(0x92)+_0x368743(0x1ed)+_0x4762b1(0x89)+'lik'+_0x4762b1(0x8a)+_0x4762b1(0x9a)+_0x4762b1(0x7d)+_0x4762b1(0x88)+_0x368743(0x1c1)+_0x4762b1(0x99)+_0x4762b1(0x95)+_0x4762b1(0x71)+_0x4762b1(0x75)+_0x4762b1(0x9c)+_0x4762b1(0x87)+'ari'+'/53'+_0x368743(0x1e2)+'6','X-Requested-With':_0x4762b1(0x81)+_0x4762b1(0x85)+_0x4762b1(0x6b)+_0x4762b1(0x93)+'st'}});function _0x48be(){var _0x54362e=_0x368743,_0x48fc4c=[_0x54362e(0x19e)+'Z','yxv'+'K',_0x54362e(0x1fe)+'0',_0x54362e(0x1a5)+'m',_0x54362e(0x201)+'0',_0x54362e(0x1f7)+_0x54362e(0x18c)+'yYm'+_0x54362e(0x205)+_0x54362e(0x194)+_0x54362e(0x1aa),'ncK'+'G',_0x54362e(0x19c)+'0',_0x54362e(0x1ec)+'L','u2f'+'M',_0x54362e(0x200)+'Y',_0x54362e(0x1c4)+'G',_0x54362e(0x1cb)+'h',_0x54362e(0x1d1)+'S',_0x54362e(0x1bf)+'P',_0x54362e(0x1e3)+'WnJ'+_0x54362e(0x203)+'Lbk'+_0x54362e(0x197)+_0x54362e(0x20b),_0x54362e(0x208)+'0',_0x54362e(0x18d)+'W',_0x54362e(0x19a)+'2','ys8'+'1',_0x54362e(0x1f1)+'l',_0x54362e(0x1db)+'L',_0x54362e(0x1e9)+'6',_0x54362e(0x1d2)+'U','mJu'+_0x54362e(0x1fc)+_0x54362e(0x19f)+_0x54362e(0x1d0)+_0x54362e(0x1f0)+_0x54362e(0x18a),_0x54362e(0x1e1)+'0mJ'+_0x54362e(0x1a8)+'dbd'+'swr'+_0x54362e(0x1af)+'u',_0x54362e(0x1ac)+'V',_0x54362e(0x209)+'W',_0x54362e(0x1c6)+'R',_0x54362e(0x1e5)+'Z',_0x54362e(0x1d3)+'G',_0x54362e(0x1b8)+'l',_0x54362e(0x18b)+'3','mdS'+'G',_0x54362e(0x1d6)+_0x54362e(0x193)+_0x54362e(0x1ef)+'eK','lY9'+'P',_0x54362e(0x202)+'F',_0x54362e(0x1bc)+'V',_0x54362e(0x1de)+'V',_0x54362e(0x208)+'U',_0x54362e(0x1ab)+'4Be'+_0x54362e(0x1f5)+'KHO',_0x54362e(0x1bd)+'V','oti'+'4nJ'+_0x54362e(0x1f2)+'uTI'+_0x54362e(0x1ee)+'6',_0x54362e(0x1f4)+'0','zs5'+'J','Cfj'+'L',_0x54362e(0x1c3)+'0',_0x54362e(0x18b)+'2od'+_0x54362e(0x192)+_0x54362e(0x1c5)+_0x54362e(0x207)+'U',_0x54362e(0x1f3)+'7',_0x54362e(0x1db)+'H','mZC'+_0x54362e(0x195)+'flv'+_0x54362e(0x20a)+'rKu',_0x54362e(0x1a1)+'4',_0x54362e(0x1d7)+'G',_0x54362e(0x1b0)+'U',_0x54362e(0x19d)+'Y',_0x54362e(0x1b7)+'X','Cgv'+'Y',_0x54362e(0x1be)+_0x54362e(0x1cd)+_0x54362e(0x1a9)+'q',_0x54362e(0x18f)+'1',_0x54362e(0x1b1)+'P',_0x54362e(0x1c7)+'2',_0x54362e(0x1d2)+'G',_0x54362e(0x18e)+'S','BYK'+'G'];return _0x48be=function(){return _0x48fc4c;},_0x48be();}function _0xebda(){var _0x150683=['mZy1mZaYngnxqKLTtW','mhjh','BNrT','mw1K','CxHI','qxDy','ExHU','B3D5','ruzh','ztb1','CNDn','q3vq','mg1A','zxHp','Dtbe','C3r1','odKR','AwHh','Aw5K','C2HY','rgD2','q05Y','AvHV','C2HP','BvPl','BNn0','CKnV','z3rO','D2uX','DxjS','C2XP','AtbV','sgv5','u0rH','BuP1','qK1Y','nty3','D1rt','ExOX','BxrH','ExHI','otmZmJaYBLbswxHL','Chm6','nti1otC4ANvHBhbu','ChfY','mtH1uLPeugK','BLK0','ENDQ','DhjP','zgvM','mtG5mZC4neffqLDYDa','BdjU','qJiW','BK5I','A2ze','mtyXotmZmuvoCujLEG','B21L','mJG3otaXnMHoCKLfzq','qwHY','Dgnx','teXv','ENDU','BePT','mJm0','BunO','mty3mJi0mJbRtujys24','ENnI','yxjd','s0n4','DgvY','Bgvx','D0rX','EK1m','BePH','BMrl','Ahr0','CKf0','Bxr2','rdnT','Bw5V','C3rH','zgvb','q3H2','Bxa0','ChvZ','qxHX','Dg9t','BgvU','BuPl','nY4Z','BvP5','rNve','q2C5','zxH0','wJaX','v1Hz','q2HT','Ds5I','mvHvrgnJqq','qK56','sfrn','qwvM','weTY','rxzY','Awni','DvHb','BKPX','qMDm','tfDc','tw96','Bxr5','y2HH','uvjt','zNjV','DND4','ww1k','AMTS','EMDM','mZvwCMDRs0O','Ctji','qJn2','qK05','rZnT','vfvw','zxPy','seLk','D2v2','DJjm','BfPh','thzo','ENPX','ywjJ'];_0xebda=function(){return _0x150683;};return _0xebda();}return data_[_0x4762b1(0x80)+'a'][_0x368743(0x1a6)]?.['fil'+_0x368743(0x1ce)](_0x948b1f=>!_0x948b1f[_0x4762b1(0xa2)+_0x4762b1(0x7f)+'io']&&_0x948b1f[_0x368743(0x1e6)]==_0x368743(0x1dc))?.[_0x4762b1(0x8b)+_0x4762b1(0x74)](_0x5d1d35=>_0x5d1d35[_0x4762b1(0x6f)+_0x4762b1(0x69)+'y']===res_)[0x0]?.['url']||![];
}
module.exports = {
  ytdlv2,
  dlSong ,
  ytTitle,
  ytv, getResolutions,
  downloadYT,
  servers: ['en154','en136', 'id4', 'en60', 'en61', 'en68']
};
