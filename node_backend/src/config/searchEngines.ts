import { ISearchEngine } from "../types/interfaces/search_vication_packages.types";

const searchEngines : ISearchEngine [] = [
    {
        engineId:"WeSki",
        engineUrl: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"
    },
    // {
    //     engineId:"skyScanner",
    //     engineUrl: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"
    // },
    // {
    //     engineId:"kayak",
    //     engineUrl: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"
    // },
    // {
    //     engineId:"easyjet",
    //     engineUrl: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"
    // },
    // {
    //     engineId:"expidia",
    //     engineUrl: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"
    // },
]

const daysRange = 3;

export {searchEngines, daysRange}