import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'
import { home } from '../../../custom'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<home>
) {
  res.status(200).json({
    slider: [
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/xqkjJW7J60kWkc9HN0br1YEsKyyDxthC5wft93gi.webp", url: "/" },
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/qV7ErGJYIkiFSI0Tz5MysdQcYRSO5g3SiWi10SsH.webp", url: "/" },
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/XlLPHP1qAyf9Bc4TyS0Gv4p46JxzflIBy3bRgUnO.webp", url: "/" },
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/Zego3FMoKnlrYfFdltVm712UeoqNnka58rgWHIj0.webp", url: "/" },
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/KSFM1ahzUykEfj6DJJWxrWAvOsWr62OvU3lrBoAw.webp", url: "/" },
      { imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/5hiIoS8umpQ8EzPGtEVcHcfCGNyaykbXfM1Ss8LM.webp", url: "/" },
    ],
    bestSelling: [{
      title: "Meron Glass Ionomer Cement",
      description: "Meron Glass Ionomer Cement is a dental adhesive that is used to cement crowns.",
      price: "33.50$",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 27,
      views: 45
    }, {
      title: "GC Fuji II LC",
      description: "GC Fuji II LC is a light-cured, low-shrinkage glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "42.00$",
      imgUrl: "https://www.gcamerica.com/en/products/restorative/glass-ionomer-cements/fuji-ii-lc",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 13,
      views: 23
    },
    {
      title: "Herculite XR",
      description: "Herculite XR is a dual-cured, high-strength glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "43.00$",
      imgUrl: "https://www.herculite.com/en-us/products/herculite-xr",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 11,
      views: 20
    },
    {
      title: "Prime&Bond NT",
      description: "Prime&Bond NT is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "44.00$",
      imgUrl: "https://www.3m.com/3M/en_US/company-us/products/~/3M-RelyX-Prime-Bond-NT-Adhesive-Kit-A3-20G-Cartridge-8774-13-042/?N=5004719&rt=rud.com",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 9,
      views: 17
    }, {
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://www.dentsplysirona.com/content/dam/Dentsply/en_US/Products/Restorative/Resin-Cements/Maxibond-Plus/Maxibond-Plus-Product-Information.png",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://www.icodon.com/global/en/dental/products/adhesives/total-etch-bond/product-information.html",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://www.3m.com/3M/en_US/company-us/products/~/3M-Adper-Scotchbond-Universal-Adhesive-Kit-A3-20G-Cartridge-8774-13-043/?N=5004720&rt=rud.com",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://www.ivoclarvivadent.com/global/en/dental/products/adhesives/beautifit-universal/product-information.html",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://www.dentsplysirona.com/content/dam/Dentsply/en_US/Products/Restorative/Adhesives/Optibond-Solo-Plus/Optibond-Solo-Plus-Product-Information.png",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://www.iccdental.com/us/en/products/adhesives/tetric-n-bond",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }],
    brands: [{
      title: "Meron Glass Ionomer Cement",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
    }],
    mostViewed: [{
      title: "Meron Glass Ionomer Cement",
      description: "Meron Glass Ionomer Cement is a dental adhesive that is used to cement crowns.",
      price: "33.50$",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 27,
      views: 45
    }],
    newArrivals: [{
      title: "Meron Glass Ionomer Cement",
      description: "Meron Glass Ionomer Cement is a dental adhesive that is used to cement crowns.",
      price: "33.50$",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 27,
      views: 45
    }],
  })
}









