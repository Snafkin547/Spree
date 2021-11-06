export default class ApiUtil {
    static URL_IP = 'http://127.0.0.1:5000/';
    static URL_ROOT = '/api/v1'

    // Please write your function address here
    static API_SEARCH = ApiUtil.URL_ROOT + '/searchBar';
    static API_REGISTER = ApiUtil.URL_ROOT + '/register';
    static API_CHECKMAILBOX = ApiUtil.URL_ROOT + '/findUserByMailbox';
}