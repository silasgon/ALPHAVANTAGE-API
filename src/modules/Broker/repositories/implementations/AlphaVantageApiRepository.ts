import axios from "axios";
import { request, response } from "express";
import { IQuotesRepository } from "../IQuotesRepository";

const API_KEY = '431JQA10Y3W9170I';

export class AlphaVantageApiRepository extends IQuotesRepository {
    async showQuote(): Promise<IQuotesRepository> {
        const { symbol, interval } = request.body;

        const options = {
            method: 'GET',
            JSON: true,
            url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`,
        }
        const quotes = await axios.request(options)
            .then(function (response) {

                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });

        return quotes;
    }
}