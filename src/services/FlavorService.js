import http from '../plugins/http'


export default {

    list () {

        return http.get('flavors')

    }

}