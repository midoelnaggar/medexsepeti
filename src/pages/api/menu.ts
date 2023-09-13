import type { NextApiRequest, NextApiResponse } from 'next'
import { menu } from '../../../custom'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<menu>
) {
  res.status(200).json([
    {
      title: "Special Offers", url: "/", color: "#283C79"
    },
    {
      title: "Restorative", url: "/", color: null, images: ["/img/01.jpg", "/img/02.png", "/img/03.png", "/img/04.jpg"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Endodontic", url: "/", color: null, images: ["/img/11.png", "/img/12.png", "/img/13.png", "/img/14.png"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Prosthetic", url: "/", color: null, images: ["/img/21.png", "/img/22.jpg", "/img/23.jpg", "/img/24.jpg"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Bleaching", url: "/", color: null, images: ["/img/31.png", "/img/32.jpg", "/img/33.png", "/img/34.png"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Dental Consumables", url: "/", images: ["/img/41.png", "/img/42.png", "/img/43.png", "/img/44.png"], color: null, children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Equipments", url: "/", color: null, images: ["/img/51.png", "/img/52.png", "/img/53.png", "/img/54.png"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Orthodontics", url: "/", color: null, images: ["/img/61.png", "/img/62.png", "/img/63.png", "/img/64.png"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    {
      title: "Medical", url: "/", color: null, images: ["/img/71.jpg", "/img/72.jpg", "/img/73.jpg", "/img/74.jpg"], children: [
        {
          title: "Composite", url: "/", color: null, children: [
            { title: "Flowable Komposite", url: "/", color: null },
            { title: "Universal Composite", url: "/", color: null },
            { title: "Posterior Composites", url: "/", color: null },
            { title: "Composite Lacquer", url: "/", color: null },
            { title: "Composite Kits", url: "/", color: null },
            { title: "Anterior Composites", url: "/", color: null },
            { title: "Aesthetic Composites", url: "/", color: null },
          ]
        }, {
          title: "Composite Instruments", url: "/", color: null, children: [
            { title: "Composite Gun", url: "/", color: null },
            { title: "Other Composites", url: "/", color: null },
          ]
        },
        {
          title: "Other Products", url: "/", color: null, children: [
            { title: "Matrix Materials & Wedges", url: "/", color: null },
            { title: "Pin, Fiber, Pivo & Posts", url: "/", color: null },
            { title: "Core & Base Materials", url: "/", color: null },
            { title: "Dentin Pins", url: "/", color: null },
            { title: "Beam Filler & Polymerization Devices", url: "/", color: null },
            ]
        },
        {
          title: "Bonds And Acids", url: "/", color: null, children: [
            { title: "Bonding Brush & Applicators", url: "/", color: null },
            { title: "Bonding", url: "/", color: null },
            { title: "Phosphoric Acid & Blue Acids", url: "/", color: null },
            { title: "Porcelain Acid & Silane", url: "/", color: null },
          ]
        },
        {
          title: "Amalgam", url: "/", color: null, children: [
            { title: "Amalgamators", url: "/", color: null },
            { title: "Amalgam Instruments", url: "/", color: null },
            { title: "Amalgams", url: "/", color: null },
          ]
        },
        {
          title: "Equipments", url: "/", color: null, children: [
            { title: "Dental Led Lamp", url: "/", color: null },
          ]
        },
      ]
    },
    { title: "Student Club", url: "/", color: "#f9ba32", children: [] },
  ])
}









