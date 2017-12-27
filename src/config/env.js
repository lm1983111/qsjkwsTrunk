let baseUrl = '';

if(process.env.NODE_ENV == 'development'){
  baseUrl = 'http://192.168.3.9:8081/'
  // baseUrl = 'http://system.gdchinasun.com/'
}else if(process.env.NODE_ENV == 'production'){
  baseUrl = ''
}

export {
  baseUrl
}
