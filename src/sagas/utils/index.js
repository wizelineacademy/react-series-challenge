export const simplifyGIFObject = (gif) => ({
  id: gif.id,
  images: {
    original: gif.images.downsized_large.url,
    small: gif.images.fixed_width_downsampled.url
  }
});
