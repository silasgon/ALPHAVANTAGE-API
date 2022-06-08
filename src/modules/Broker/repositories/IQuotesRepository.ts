interface IQuote {
    id?: string;
    symbol: string;
    open: string;
    high: string;
    low: string;
    price: string;
    volume: string;
    latestTradingDay: string;
    previousClose: string;
    change: string
    changePercent: string;
}


export class IQuotesRepository {
    showTop10(): Promise<IQuotesRepository>;
    showQuote(): Promise<IQuotesRepository>;
    searchByKeywords(): Promise<IQuotesRepository>;
    save(quote: IQuotesDTO): Promise<void>;
}