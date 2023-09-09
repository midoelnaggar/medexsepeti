import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string,
  url: string,
  color: string | null
}[]


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { title: "Special Offers", url: "/", color: "#283C79" },
    { title: "Restorative", url: "/", color: null },
    { title: "Endodontic", url: "/", color: null },
    { title: "Prosthetic", url: "/", color: null },
    { title: "Bleaching", url: "/", color: null },
    { title: "Dental Consumables", url: "/", color: null },
    { title: "Equipments", url: "/", color: null },
    { title: "Orthodontics", url: "/", color: null },
    { title: "Medical", url: "/", color: null },
    { title: "Student Club", url: "/", color: "#f9ba32" },
  ])
}









