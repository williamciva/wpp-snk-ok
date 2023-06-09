import login from './use-case/login'
import lookForAuthorization from './use-case/look-for-authorization'

(async () => {
    await login()
    await lookForAuthorization()
})()
