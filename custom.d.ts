import moment from 'moment'
const now = moment();
const date = now.toDate();

type children = React.ReactNode


type menu = { title: string; url: string }[];

type product = {
    title: string;
    description: string;
    price: string;
    imgUrl: string;
    tag?: "normal" | "best selling"| "most viewed";
    dateCreated: date;
    wishlistedCount: number;
    views: number;
};

type brand = {
    title: string;
    imgUrl: string;
    url: string;
};

type home = {
    slider: {
        imgUrl: string,
        url: string,
    }[],
    bestSelling: product[],
    brands: brand[],
    mostViewed: product[],
    newArrivals: product[]
}

