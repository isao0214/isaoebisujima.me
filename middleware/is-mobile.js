/*
** userAgentによって、PCかSPか判定する
*/
export default function (context) {

  // userAgentを定数で宣言
  const userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;

  // userAgentがiPhone, iPod, iPad, Androidのいずれかだった場合context.isMobileにtrueを代入。そうではない場合falseを代入
  context.isMobile = Boolean(userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0);
};
