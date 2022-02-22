import axios from 'axios'

export const getImages = async () => {
  const { data } = await axios.get('/api/successes')
  return data.data.map((s: { attachment: string }) => s.attachment)
}
