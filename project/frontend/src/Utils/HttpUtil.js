export default class HttpUtil{
    // post function
    static post(url, data){
        return new Promise((resolve,reject)=>{
            fetch(url,{ 
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(result=>resolve(result))
                .catch(error=>{
                    reject(error);
                })
        })
    }
}