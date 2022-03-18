import { Platform } from 'react-native' ; 

let baseUrl = '' ; 


{Platform.OS=='android'
? baseUrl=  'https://a16c-117-96-192-101.ngrok.io/' : baseUrl = 'https://a16c-117-96-192-101.ngrok.io/'
}

export default baseUrl ; 