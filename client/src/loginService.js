import axios from 'axios';

const url = 'api/posts/';

class loginService {

    //create post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }
}

export default loginService
