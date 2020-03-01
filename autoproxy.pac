function FindProxyForURL(url, host) {
  
  var PROXY = "SOCKS5 127.0.0.1:1080";
  var DEFAULT = "DIRECT";
  
  // domain .com/.net/.org
  if (/(asahichinese|appspot|delicious|facebook|googleusercontent|googleapis|ggpht|html5rocks|hulu|twitter|twimg|staticflickr)\.com/i.test(host)) return PROXY;
  if (/(4sqi|akamai|akamaihd|fbcdn)\.net/i.test(host)) return PROXY;
  if (/(nobelprize|python|wikipedia|wikisource|wikimedia)\.org/i.test(host)) return PROXY;
  
  if(/bit\.ly/i.test(host)) return PROXY;
  if(/imagesak\.secureserver\.net/i.test(host)) return PROXY;
  if(/itunesconnect\.apple\.com/i.test(host)) return PROXY;
  if(/static\.flickr\.com/i.test(host)) return PROXY;
  if(/fb\.me/i.test(host)) return PROXY;
  if(/bit\.ly/i.test(host)) return PROXY;
  if(/^t\.co/i.test(host)) return PROXY;
  if(/youporn\.phncdn\.com/i.test(host)) return PROXY;
  if(/mail\.google\.com/i.test(host)) return PROXY;
  if(/chrome\.google\.com/i.test(host)) return PROXY;
  if(/developer\.chrome\.com/i.test(host)) return PROXY;
  
  return DEFAULT;
}
