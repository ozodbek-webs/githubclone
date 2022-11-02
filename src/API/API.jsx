import axios from 'axios';
let baseURL =  "https://api.github.com/";
let Url = " https://api.github.com/search/users?q"
const req = {
    getIn:async (userName="ozodbek-webs")=>{
        
        const res =await axios.get(`${baseURL}users/${userName}`)
        console.log(res.data);
        localStorage.setItem("malumot",JSON.stringify(res.data))
    },
    getRepo:async(userName="ozodbek-webs")=>{
        const repo = await axios.get(`${baseURL}users/${userName}/repos`)
        console.log(repo.data);
        localStorage.setItem("repo",JSON.stringify(repo.data))
    },
    getFol:async(userName="ozodbek-webs")=>{
        const repo = await axios.get(`${baseURL}users/${userName}/following`)
        console.log(repo.data);
        localStorage.setItem("follow",JSON.stringify(repo.data))
    },
    getFolow:async(userName="ozodbek-webs")=>{
        const repo = await axios.get(`${baseURL}users/${userName}/followers`)
        console.log(repo.data);
        localStorage.setItem("following",JSON.stringify(repo.data))
    },
    getQidir:async(userName)=>{
        const repo = await axios.get(`${Url}=${userName}`)
        console.log(repo.data);
        localStorage.setItem("qidiruv",JSON.stringify(repo.data))
    }
}
export default req;