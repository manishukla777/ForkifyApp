import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        const key = 'd3f1090e47a7a56108333ef33c3ed855';
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error)
        }
    }

}


