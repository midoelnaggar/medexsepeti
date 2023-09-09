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
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/escom-100-nano-hibrit-kompozit-a1-a2-a3-6d9cdba6-365e-4a41-9928.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 13,
      views: 23
    },
    {
      title: "Herculite XR",
      description: "Herculite XR is a dual-cured, high-strength glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "43.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/olico-xp-bembeyaz-kompozit-bl-49eb373a-bd1a-4b94-ace1.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 11,
      views: 20
    },
    {
      title: "Prime&Bond NT",
      description: "Prime&Bond NT is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "44.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/meridian-hibrit-kompozit-e3e4fc2a-8e1c-4528-9edc.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 9,
      views: 17
    }, {
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/master-fill-nano-hibrit-kompozit-a1-a3-4-gr-e1dfd345-3b35-46a9-85c4.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/maxfill-universal-nano-hibrit-kompozit-158235f7-64c3-4d85-8364.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "best selling",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }],
    brands: [{
      title: "Vericom",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/p6ck1opziBg2Fg2ePNnBxobrgETHAQ5uFLpOi2Rf.webp",
      url: "/"
    },
    {
      title: "Spident",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/xsFl989yZ0p3uiuV1KpQGZJmlmyChSM6fymMDNcy.webp",
      url: "/"
    },
    {
      title: "Zhermack",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/lFwm2xHYjnpAdB0zD94yyQW6g0FumA0UYaphrFwV.webp",
      url: "/"
    },
    {
      title: "Kulzer",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/qLUZq4CbStuOeP61FbxmRBYsMIpiTWPWzp8Z2Yhz.webp",
      url: "/"
    },
    {
      title: "Dentsply Sirona",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/iZ23kJSBmg2mihjK8F1taJHJy41bdBjUIS6HPg2r.webp",
      url: "/"
    },
    {
      title: "Vladimiva",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/5yFX6TG2BusgbbFhUjt7YG66yWeLdoyzyojiNjPZ.webp",
      url: "/"
    },
    {
      title: "Hahnenkratt",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/O9ZuBj1KxIYmBLOvT6L0i6ODIDNqYkggbMoAZGL5.webp",
      url: "/"
    },
    {
      title: "Uktradent",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/KH6OVbfyGJxFhACWzQCp7BnRiPPZpCZvMS4Pzoqn.webp",
      url: "/"
    },
    {
      title: "Vericom",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/p6ck1opziBg2Fg2ePNnBxobrgETHAQ5uFLpOi2Rf.webp",
      url: "/"
    },
    {
      title: "Spident",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/xsFl989yZ0p3uiuV1KpQGZJmlmyChSM6fymMDNcy.webp",
      url: "/"
    },
    {
      title: "Zhermack",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/lFwm2xHYjnpAdB0zD94yyQW6g0FumA0UYaphrFwV.webp",
      url: "/"
    },
    {
      title: "Kulzer",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/qLUZq4CbStuOeP61FbxmRBYsMIpiTWPWzp8Z2Yhz.webp",
      url: "/"
    },
    {
      title: "Dentsply Sirona",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/iZ23kJSBmg2mihjK8F1taJHJy41bdBjUIS6HPg2r.webp",
      url: "/"
    },
    {
      title: "Vladimiva",
      imgUrl: "https://admin.medexsepeti.com/graph/uploads/original/manufacturers_images/5yFX6TG2BusgbbFhUjt7YG66yWeLdoyzyojiNjPZ.webp",
      url: "/"
    },
    ],
    mostViewed: [{
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/master-fill-nano-hibrit-kompozit-a1-a3-4-gr-e1dfd345-3b35-46a9-85c4.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/maxfill-universal-nano-hibrit-kompozit-158235f7-64c3-4d85-8364.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }, {
      title: "Meron Glass Ionomer Cement",
      description: "Meron Glass Ionomer Cement is a dental adhesive that is used to cement crowns.",
      price: "33.50$",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 27,
      views: 45
    }, {
      title: "GC Fuji II LC",
      description: "GC Fuji II LC is a light-cured, low-shrinkage glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "42.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/escom-100-nano-hibrit-kompozit-a1-a2-a3-6d9cdba6-365e-4a41-9928.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 13,
      views: 23
    },
    {
      title: "Herculite XR",
      description: "Herculite XR is a dual-cured, high-strength glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "43.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/olico-xp-bembeyaz-kompozit-bl-49eb373a-bd1a-4b94-ace1.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 11,
      views: 20
    },
    {
      title: "Prime&Bond NT",
      description: "Prime&Bond NT is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "44.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/meridian-hibrit-kompozit-e3e4fc2a-8e1c-4528-9edc.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 9,
      views: 17
    }, {
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/master-fill-nano-hibrit-kompozit-a1-a3-4-gr-e1dfd345-3b35-46a9-85c4.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/maxfill-universal-nano-hibrit-kompozit-158235f7-64c3-4d85-8364.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "most viewed",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }],
    newArrivals: [{
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }, {
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/master-fill-nano-hibrit-kompozit-a1-a3-4-gr-e1dfd345-3b35-46a9-85c4.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/maxfill-universal-nano-hibrit-kompozit-158235f7-64c3-4d85-8364.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }, {
      title: "Meron Glass Ionomer Cement",
      description: "Meron Glass Ionomer Cement is a dental adhesive that is used to cement crowns.",
      price: "33.50$",
      imgUrl: "https://cdn1.medexsepeti.com/originals/359/meron-cam-iyonomer-yapistirma-simani-52f72c3b-a80e-49bb-a3d4.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 27,
      views: 45
    }, {
      title: "GC Fuji II LC",
      description: "GC Fuji II LC is a light-cured, low-shrinkage glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "42.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/escom-100-nano-hibrit-kompozit-a1-a2-a3-6d9cdba6-365e-4a41-9928.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 13,
      views: 23
    },
    {
      title: "Herculite XR",
      description: "Herculite XR is a dual-cured, high-strength glass ionomer cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "43.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/olico-xp-bembeyaz-kompozit-bl-49eb373a-bd1a-4b94-ace1.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 11,
      views: 20
    },
    {
      title: "Prime&Bond NT",
      description: "Prime&Bond NT is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "44.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/meridian-hibrit-kompozit-e3e4fc2a-8e1c-4528-9edc.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 9,
      views: 17
    }, {
      title: "Maxibond Plus",
      description: "Maxibond Plus is a dual-cured, high-strength resin cement that is used to cement crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "45.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/master-fill-nano-hibrit-kompozit-a1-a3-4-gr-e1dfd345-3b35-46a9-85c4.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 7,
      views: 15
    },
    {
      title: "Total Etch & Bond",
      description: "Total Etch & Bond is a two-step, self-etching, light-cured adhesive system that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "46.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/maxfill-universal-nano-hibrit-kompozit-158235f7-64c3-4d85-8364.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 5,
      views: 13
    },
    {
      title: "Adper Scotchbond Universal",
      description: "Adper Scotchbond Universal is a universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "47.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/tpc-bond-fircasi-100-adet-1905be80-e0c1-4ee8-baad.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 3,
      views: 11
    }, {
      title: "BeautiBond Universal",
      description: "BeautiBond Universal is a light-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "48.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/396/oliflow-light-curing-akiskan-kompozit-0016619d-ed95-450a-8125.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 1,
      views: 8
    },
    {
      title: "Optibond Solo Plus",
      description: "Optibond Solo Plus is a light-cured, single-component adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "49.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-comp-nano-hiprit-kompozit-seti-6li-dc496d13-357f-4298-8d76.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 6
    },
    {
      title: "Tetric N-Bond",
      description: "Tetric N-Bond is a dual-cured, universal adhesive that is used to bond crowns, bridges, inlays, onlays, and orthodontic appliances.",
      price: "50.00$",
      imgUrl: "https://cdn1.medexsepeti.com/dims/250X250/359/ruby-cap-ii-45-kapsul-amalgam-2-luk-1de44616-a555-4024-84bd.jpg",
      tag: "normal",
      dateCreated: moment(),
      wishlistedCount: 0,
      views: 4
    }],
  })
}









