declare module namespace {

    export interface Image {
        MainImage: string;
        URL: string;
    }

    export interface HotelDescriptiveContent {
        Images: Image[];
    }

    export interface Distance {
        type: string;
        distance: string;
    }

    export interface Position {
        Latitude: string;
        Longitude: string;
        Distances: Distance[];
    }

    export interface HotelInfo {
        Position: Position;
        Rating: string;
        Beds: string;
    }

    export interface PricesInfo {
        AmountAfterTax: string;
        AmountBeforeTax: string;
    }

    export interface Accommodation {
        HotelCode: string;
        HotelName: string;
        HotelDescriptiveContent: HotelDescriptiveContent;
        HotelInfo: HotelInfo;
        PricesInfo: PricesInfo;
    }

    export interface Body {
        success: string;
        accommodations: Accommodation[];
    }

    export interface RootObject {
        statusCode: number;
        body: Body;
    }

}

