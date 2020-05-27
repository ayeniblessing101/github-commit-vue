import * as axios from 'axios';


const getCommits = async (branch) => {
    const response = await axios.get("https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=" + branch);
    return response.data;
}

export const data =  {
    getCommits
}