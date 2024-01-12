import requests from "./requests";
import axios from "axios";

export async function fetchArticles(page = 1, author = null, topic = null) {
    let url = `${requests.articles.index}?page=${page}`;

    if (author) {
        url = `${url}&author=${author}`;
    }
    if (topic) {
        url = `${url}&topic=${topic}`;
    }

    try {
        const response = await axios.get(url);
        const articles = response.data.data;
        const totalPages = response.data.meta.last_page;
        return {articles, totalPages}
    } catch (error) {
        console.log(error);
    }
};