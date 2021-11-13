export interface IImage {
    MainImage: string;
    URL: string;
}

export interface IHotelDescriptiveContent {
    Images: IImage[];
}

export interface IDistance {
    type: string;
    distance: string;
}

export interface IPosition {
    Latitude: string;
    Longitude: string;
    Distances: IDistance[];
}

export interface IHotelInfo {
    Position: IPosition;
    Rating: string;
    Beds: string;
}

export interface IPricesInfo {
    AmountAfterTax: string;
    AmountBeforeTax: string;
}

export interface IAccommodation {
    HotelCode: string;
    HotelName: string;
    HotelDescriptiveContent: IHotelDescriptiveContent;
    HotelInfo: IHotelInfo;
    PricesInfo: IPricesInfo;
}

export interface IBody {
    success: string;
    accommodations: IAccommodation[];
}

export interface IResposeBody {
    statusCode: number;
    body: IBody;
}


// request interfaces
export interface IRequestBody{
    query:IQuery
}

export interface IQuery{
    ski_site: number, 
    from_date: string, 
    to_date: string, 
    group_size: number 
}

//search engines interfaces // in reality each search engine will probably have its own interfaces and function to create a solid response type to client side
export interface ISearchEngine{
    engineId:string,
    engineUrl:string
}         


