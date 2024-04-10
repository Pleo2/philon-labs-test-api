// install process.env and call;
const apikey = process.env.API_URL
const baseUrl = process.env.BASE_API_URL

export default async function getSprite ({
  limit = 25,
  page = 0,
  offset = 0
} = {}) {
  const apiUrl = `${baseUrl}/gifs/trending?api_key=${apikey}&limit=${limit}&offset=${offset}&rating=g`
  const res = await fetch(apiUrl)
  const apiResponse = await res.json()
  return apiResponse
}