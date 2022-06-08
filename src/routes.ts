import {Router} from "express";
import { CompareQuoteController } from "./controllers/Broker/CompareQuoteController";
import { QuoteBySymbolController } from "./controllers/Broker/QuoteBySymbolController";
import { SearchSymbolByKeywordController } from "./controllers/Broker/SeachSymbolByKeywordsController";



const router = Router();


const searchSymbol = new SearchSymbolByKeywordController();
const quoteBySymbol = new QuoteBySymbolController();
const compareQuotes = new CompareQuoteController();

router.post('/symbol', searchSymbol.handle);

router.get('/quote', quoteBySymbol.handle);
router.get('/compare', compareQuotes.handle);

export { router }