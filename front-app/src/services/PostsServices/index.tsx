import api from "../api";

export default  {
    async getPosts() {
        try {
            const response = api.get("/post");
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async savedPosts(token: string) {
        try {
            const response = api.get("/private/myposts", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            } );
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async savePost(token: string, postId: number) {
        try {
            const response = api.post(`/private/myposts/${postId}`, {}, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async removeSavedPost(token: string, postId: number) {
        try {
            const response = api.delete(`/private/myposts/${postId}`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}