export const getImages = () =>
  new Promise<string[]>(resolve => {
    resolve(
      Array(99)
        .fill('')
        .map((_, i) => `https://picsum.photos/id/${i}/300/200`)
    )
  })
