import axios from 'axios'

export const getImages = async () => {
  const { data } = await axios.get('https://soldoutcook.com/api/successes')
  return data.data.map((s: { attachment: string }) => s.attachment)
}
