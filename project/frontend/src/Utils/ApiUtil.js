export default class ApiUtil {
    static URL_IP = 'https://chip-spree-testenv.herokuapp.com';
    static URL_ROOT = '/api/v1'
    
    // Please write your function address here
    static API_SEARCH = ApiUtil.URL_IP + ApiUtil.URL_ROOT + '/searchBar';
    static API_REGISTER = ApiUtil.URL_IP + ApiUtil.URL_ROOT + '/register';
    static API_CHECKMAILBOX = ApiUtil.URL_IP + ApiUtil.URL_ROOT + '/findUserByMailbox';
    static API_LOGIN = ApiUtil.URL_IP + ApiUtil.URL_ROOT + '/login';
    static API_GETPRODUCT=ApiUtil.URL_ROOT + '/item';
    static API_GETORDEREDPRODUCTS=this.URL_IP + ApiUtil.URL_ROOT + '/getItems';
    static API_GETUSERINFO=this.URL_IP + ApiUtil.URL_ROOT + '/getUserInfo';
    static API_GETCART = ApiUtil.URL_ROOT + '/cart';
    static API_ADDTOCART = ApiUtil.URL_ROOT + '/addToCart';
    static API_TOTALPRICE = ApiUtil.URL_ROOT + '/totalPrice';
    static API_CHECKOUT = ApiUtil.URL_ROOT + '/checkout';
    static API_REMOVEFROMCART = ApiUtil.URL_ROOT + '/removeFromCart';
    static API_CONFIRMATION = ApiUtil.URL_ROOT + '/confirmation';
}

