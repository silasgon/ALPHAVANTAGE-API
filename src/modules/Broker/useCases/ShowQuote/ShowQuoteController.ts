import { Request, Response } from "express";
import { ShowQuoteUseCase } from "./ShowQuoteUseCase";


export class ShowQuoteController {
    constructor(private showQuoteUseCase: ShowQuoteUseCase) {}

    handle(request: Request, response: Response): Response{

        const quote = this.showQuoteUseCase.execute();

        return response.json(quote);

    }
}