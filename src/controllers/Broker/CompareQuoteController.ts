import axios from "axios";
import { Request, Response } from "express";

const API_KEY = '431JQA10Y3W9170I';
interface IQuote{
    quote: JSON;
}
export class CompareQuoteController {
    private quotes: IQuote[];

    constructor(){
        this.quotes = [];
    }

    async handle(request: Request, response: Response) {
        const { symbol_1, symbol_2, interval } = request.body;

        const options1 = {
            method: 'GET',
            JSON: true,
            url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol_1}&interval=${interval}&apikey=${API_KEY}`
        }
        const quote1 = await axios.request(options1)
            .then(function (response) {
                console.log(response.data)
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });

        this.quotes.push(quote1);

        const options2 = {
            method: 'GET',
            JSON: true,
            url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol_2}&interval=${interval}&apikey=${API_KEY}`
        }
        const quote2 = await axios.request(options2)
            .then(function (response) {
                console.log(response.data)
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });

       this.quotes.push(quote2);
       
        return response.json(this.quotes);
    }
}