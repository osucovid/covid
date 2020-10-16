import axios from 'axios';

const url = 'api/posts/';

class PostService {
    //get posts
    //using static means that even though we have a class and a method
    //we don't have to instantiate a new PostService object to use it
    //we can simply use PostService.getPosts()
    
    //commented out because async psomise executor functions are not considered good practice
    //forced by eslint
    // static getPosts() {
    //     return new Promise( (resolve, reject) => {
    //         try {
    //             const res = await axios.get(url);
    //             const data = res.data;
    //             resolve(
    //                 data.map(post => ({
    //                     ...post, 
    //                     createdAt: new Date(post.createdAt)
    //                 }))
    //             );
    //         } catch(err) {
    //             reject(err);
    //         }
    //     })
    // }
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }


    //create post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    //delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService