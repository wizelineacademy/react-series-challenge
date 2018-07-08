export interface IImageObject {
    url: string
    width: number
    height: number
}
export interface IGIF {
    id: string
    slug: string
    url: string
    // Image Objects. See:
    // https://developers.giphy.com/docs/#rendition-guide
    images: {
        original: IImageObject
        fixed_height: IImageObject
    }
}