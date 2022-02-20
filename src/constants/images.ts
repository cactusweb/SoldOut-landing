import axios from 'axios'

export const getImages = async () => {
  const { data } = await axios.get('http://localhost:3000/api/successes')
  return data.data.map((s: { attachment: string }) => s.attachment)
}
