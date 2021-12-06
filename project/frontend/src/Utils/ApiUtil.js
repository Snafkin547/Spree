export default class ApiUtil {
    static URL_IP = 'http://127.0.0.1:5000/';
    static URL_ROOT = '/api/v1'

    
    // Please write your function address here
    static API_SEARCH = this.URL_IP + ApiUtil.URL_ROOT + '/searchBar';
    static API_REGISTER = this.URL_IP + ApiUtil.URL_ROOT + '/register';
    static API_GETPRODUCT=this.URL_IP + ApiUtil.URL_ROOT + '/item';
    static API_GETORDEREDPRODUCTS=this.URL_IP + ApiUtil.URL_ROOT + '/getItems';
    static API_GETUSERINFO=this.URL_IP + ApiUtil.URL_ROOT + '/getUserInfo';

}

