import { getTrendingGifs } from './giphyApi';
import { runSaga } from 'redux-saga';

const mockApiResponse = {
  "data": [
    {
      "type": "gif",
      "id": "8FMLOqBX3TwBxnKbrA",
      "slug": "ellamai-ella-mai-bood-up-8FMLOqBX3TwBxnKbrA",
      "url": "https://giphy.com/gifs/ellamai-ella-mai-bood-up-8FMLOqBX3TwBxnKbrA",
      "bitly_gif_url": "https://gph.is/2JcXIs8",
      "bitly_url": "https://gph.is/2JcXIs8",
      "embed_url": "https://giphy.com/embed/8FMLOqBX3TwBxnKbrA",
      "username": "ellamai",
      "source": "",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2018-07-09 21:03:57",
      "trending_datetime": "2018-07-10 18:49:55",
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "avatar": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "banner_url": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "banner_image": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "profile_url": "https://giphy.com/ellamai/",
        "username": "ellamai",
        "display_name": "Ella Mai"
      },
      "images": {
        "fixed_height_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200_s.gif",
          "width": "356",
          "height": "200",
          "size": "52306"
        },
        "original_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy_s.gif",
          "width": "480",
          "height": "270",
          "size": "87798"
        },
        "fixed_width": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.gif",
          "width": "200",
          "height": "112",
          "size": "739715",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.mp4",
          "mp4_size": "142753",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.webp",
          "webp_size": "265118"
        },
        "fixed_height_small_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100_s.gif",
          "width": "178",
          "height": "100",
          "size": "15543"
        },
        "fixed_height_downsampled": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200_d.gif",
          "width": "356",
          "height": "200",
          "size": "327148",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200_d.webp",
          "webp_size": "93398"
        },
        "preview": {
          "width": "263",
          "height": "148",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-preview.mp4",
          "mp4_size": "43479"
        },
        "fixed_height_small": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100.gif",
          "width": "178",
          "height": "100",
          "size": "555066",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100.mp4",
          "mp4_size": "135120",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100.webp",
          "webp_size": "219588"
        },
        "downsized_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-downsized_s.gif",
          "width": "357",
          "height": "201",
          "size": "50765"
        },
        "downsized": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-downsized.gif",
          "width": "357",
          "height": "201",
          "size": "1951262"
        },
        "downsized_large": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "3564391"
        },
        "fixed_width_small_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100w_s.gif",
          "width": "100",
          "height": "56",
          "size": "6263"
        },
        "preview_webp": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-preview.webp",
          "width": "155",
          "height": "87",
          "size": "49444"
        },
        "fixed_width_still": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w_s.gif",
          "width": "200",
          "height": "112",
          "size": "19703"
        },
        "fixed_width_small": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100w.gif",
          "width": "100",
          "height": "56",
          "size": "196146",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100w.mp4",
          "mp4_size": "48613",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/100w.webp",
          "webp_size": "98152"
        },
        "downsized_small": {
          "width": "327",
          "height": "184",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-downsized-small.mp4",
          "mp4_size": "151943"
        },
        "fixed_width_downsampled": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w_d.gif",
          "width": "200",
          "height": "112",
          "size": "118679",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w_d.webp",
          "webp_size": "41796"
        },
        "downsized_medium": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "3564391"
        },
        "original": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "3564391",
          "frames": "38",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.mp4",
          "mp4_size": "424731",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.webp",
          "webp_size": "890482",
          "hash": "d806500eee2c5280541cc7f1f83334e7"
        },
        "fixed_height": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200.gif",
          "width": "356",
          "height": "200",
          "size": "2036032",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200.mp4",
          "mp4_size": "294552",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200.webp",
          "webp_size": "595636"
        },
        "looping": {
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-loop.mp4",
          "mp4_size": "2290085"
        },
        "original_mp4": {
          "width": "480",
          "height": "270",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy.mp4",
          "mp4_size": "424731"
        },
        "preview_gif": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/giphy-preview.gif",
          "width": "105",
          "height": "59",
          "size": "48207"
        },
        "480w_still": {
          "url": "https://media1.giphy.com/media/8FMLOqBX3TwBxnKbrA/480w_s.jpg",
          "width": "480",
          "height": "270"
        }
      },
      "title": "boo'd up GIF by Ella Mai",
      "_score": 0
    },
    {
      "type": "gif",
      "id": "7vzoRu05YJp2pFMd24",
      "slug": "ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
      "url": "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
      "bitly_gif_url": "https://gph.is/2L1kVPo",
      "bitly_url": "https://gph.is/2L1kVPo",
      "embed_url": "https://giphy.com/embed/7vzoRu05YJp2pFMd24",
      "username": "ellamai",
      "source": "",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2018-07-09 21:03:47",
      "trending_datetime": "2018-07-11 01:45:01",
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "avatar": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "banner_url": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "banner_image": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "profile_url": "https://giphy.com/ellamai/",
        "username": "ellamai",
        "display_name": "Ella Mai"
      },
      "images": {
        "fixed_height_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200_s.gif",
          "width": "356",
          "height": "200",
          "size": "46496"
        },
        "original_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy_s.gif",
          "width": "480",
          "height": "270",
          "size": "77119"
        },
        "fixed_width": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.gif",
          "width": "200",
          "height": "112",
          "size": "361247",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.mp4",
          "mp4_size": "68902",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.webp",
          "webp_size": "122550"
        },
        "fixed_height_small_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100_s.gif",
          "width": "178",
          "height": "100",
          "size": "13910"
        },
        "fixed_height_downsampled": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200_d.gif",
          "width": "356",
          "height": "200",
          "size": "286969",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200_d.webp",
          "webp_size": "78500"
        },
        "preview": {
          "width": "227",
          "height": "128",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-preview.mp4",
          "mp4_size": "42207"
        },
        "fixed_height_small": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100.gif",
          "width": "178",
          "height": "100",
          "size": "275006",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100.mp4",
          "mp4_size": "65772",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100.webp",
          "webp_size": "101800"
        },
        "downsized_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-downsized_s.gif",
          "width": "480",
          "height": "270",
          "size": "77119"
        },
        "downsized": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1704774"
        },
        "downsized_large": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1704774"
        },
        "fixed_width_small_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100w_s.gif",
          "width": "100",
          "height": "56",
          "size": "5823"
        },
        "preview_webp": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-preview.webp",
          "width": "174",
          "height": "98",
          "size": "48776"
        },
        "fixed_width_still": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w_s.gif",
          "width": "200",
          "height": "112",
          "size": "17710"
        },
        "fixed_width_small": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100w.gif",
          "width": "100",
          "height": "56",
          "size": "102495",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100w.mp4",
          "mp4_size": "31857",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/100w.webp",
          "webp_size": "47756"
        },
        "downsized_small": {
          "width": "430",
          "height": "242",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-downsized-small.mp4",
          "mp4_size": "112144"
        },
        "fixed_width_downsampled": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w_d.gif",
          "width": "200",
          "height": "112",
          "size": "106228",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w_d.webp",
          "webp_size": "35494"
        },
        "downsized_medium": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1704774"
        },
        "original": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1704774",
          "frames": "21",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.mp4",
          "mp4_size": "219660",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.webp",
          "webp_size": "406234",
          "hash": "56a2528fa52bc8628c3c593d3aa2dc01"
        },
        "fixed_height": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200.gif",
          "width": "356",
          "height": "200",
          "size": "975460",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200.mp4",
          "mp4_size": "151144",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200.webp",
          "webp_size": "272686"
        },
        "looping": {
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-loop.mp4",
          "mp4_size": "2161327"
        },
        "original_mp4": {
          "width": "480",
          "height": "270",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.mp4",
          "mp4_size": "219660"
        },
        "preview_gif": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy-preview.gif",
          "width": "112",
          "height": "63",
          "size": "49234"
        },
        "480w_still": {
          "url": "https://media1.giphy.com/media/7vzoRu05YJp2pFMd24/480w_s.jpg",
          "width": "480",
          "height": "270"
        }
      },
      "title": "boo'd up GIF by Ella Mai",
      "_score": 0
    },
    {
      "type": "gif",
      "id": "4003lSbBp1ZIhWPn1h",
      "slug": "ellamai-ella-mai-bood-up-4003lSbBp1ZIhWPn1h",
      "url": "https://giphy.com/gifs/ellamai-ella-mai-bood-up-4003lSbBp1ZIhWPn1h",
      "bitly_gif_url": "https://gph.is/2maiUG9",
      "bitly_url": "https://gph.is/2maiUG9",
      "embed_url": "https://giphy.com/embed/4003lSbBp1ZIhWPn1h",
      "username": "ellamai",
      "source": "",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2018-07-09 21:04:07",
      "trending_datetime": "2018-07-11 01:30:01",
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "avatar": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "banner_url": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "banner_image": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "profile_url": "https://giphy.com/ellamai/",
        "username": "ellamai",
        "display_name": "Ella Mai"
      },
      "images": {
        "fixed_height_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200_s.gif",
          "width": "356",
          "height": "200",
          "size": "36320"
        },
        "original_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy_s.gif",
          "width": "480",
          "height": "270",
          "size": "58959"
        },
        "fixed_width": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w.gif",
          "width": "200",
          "height": "112",
          "size": "355536",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w.mp4",
          "mp4_size": "101511",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w.webp",
          "webp_size": "129492"
        },
        "fixed_height_small_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100_s.gif",
          "width": "178",
          "height": "100",
          "size": "11187"
        },
        "fixed_height_downsampled": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200_d.gif",
          "width": "356",
          "height": "200",
          "size": "272000",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200_d.webp",
          "webp_size": "81734"
        },
        "preview": {
          "width": "192",
          "height": "108",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-preview.mp4",
          "mp4_size": "49277"
        },
        "fixed_height_small": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100.gif",
          "width": "178",
          "height": "100",
          "size": "280850",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100.mp4",
          "mp4_size": "92742",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100.webp",
          "webp_size": "108862"
        },
        "downsized_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-downsized_s.gif",
          "width": "480",
          "height": "270",
          "size": "58959"
        },
        "downsized": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1701129"
        },
        "downsized_large": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1701129"
        },
        "fixed_width_small_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100w_s.gif",
          "width": "100",
          "height": "56",
          "size": "4886"
        },
        "preview_webp": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-preview.webp",
          "width": "176",
          "height": "99",
          "size": "49680"
        },
        "fixed_width_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w_s.gif",
          "width": "200",
          "height": "112",
          "size": "14091"
        },
        "fixed_width_small": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100w.gif",
          "width": "100",
          "height": "56",
          "size": "105392",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100w.mp4",
          "mp4_size": "43963",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/100w.webp",
          "webp_size": "50116"
        },
        "downsized_small": {
          "width": "376",
          "height": "212",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-downsized-small.mp4",
          "mp4_size": "143038"
        },
        "fixed_width_downsampled": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w_d.gif",
          "width": "200",
          "height": "112",
          "size": "100185",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200w_d.webp",
          "webp_size": "35660"
        },
        "downsized_medium": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1701129"
        },
        "original": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1701129",
          "frames": "21",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.mp4",
          "mp4_size": "321951",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.webp",
          "webp_size": "458314",
          "hash": "72f905dc390ad29771437f1c4968773e"
        },
        "fixed_height": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200.gif",
          "width": "356",
          "height": "200",
          "size": "966517",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200.mp4",
          "mp4_size": "218713",
          "webp": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/200.webp",
          "webp_size": "299986"
        },
        "looping": {
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-loop.mp4",
          "mp4_size": "3204949"
        },
        "original_mp4": {
          "width": "480",
          "height": "270",
          "mp4": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy.mp4",
          "mp4_size": "321951"
        },
        "preview_gif": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/giphy-preview.gif",
          "width": "114",
          "height": "64",
          "size": "49966"
        },
        "480w_still": {
          "url": "https://media2.giphy.com/media/4003lSbBp1ZIhWPn1h/480w_s.jpg",
          "width": "480",
          "height": "270"
        }
      },
      "title": "boo'd up GIF by Ella Mai",
      "_score": 0
    },
    {
      "type": "gif",
      "id": "3ktRws88PRbBVbbYyE",
      "slug": "ellamai-ella-mai-bood-up-3ktRws88PRbBVbbYyE",
      "url": "https://giphy.com/gifs/ellamai-ella-mai-bood-up-3ktRws88PRbBVbbYyE",
      "bitly_gif_url": "https://gph.is/2KNUOzK",
      "bitly_url": "https://gph.is/2KNUOzK",
      "embed_url": "https://giphy.com/embed/3ktRws88PRbBVbbYyE",
      "username": "ellamai",
      "source": "",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2018-07-09 21:03:37",
      "trending_datetime": "2018-07-11 01:15:01",
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "avatar": "https://media3.giphy.com/avatars/ellamai/C4Z8HKFUxrLy.jpg",
        "banner_url": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "banner_image": "https://media3.giphy.com/headers/ellamai/AmdupRCpjpDz.jpg",
        "profile_url": "https://giphy.com/ellamai/",
        "username": "ellamai",
        "display_name": "Ella Mai"
      },
      "images": {
        "fixed_height_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200_s.gif",
          "width": "356",
          "height": "200",
          "size": "43155"
        },
        "original_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy_s.gif",
          "width": "480",
          "height": "270",
          "size": "69254"
        },
        "fixed_width": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w.gif",
          "width": "200",
          "height": "112",
          "size": "353780",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w.mp4",
          "mp4_size": "37949",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w.webp",
          "webp_size": "82514"
        },
        "fixed_height_small_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100_s.gif",
          "width": "178",
          "height": "100",
          "size": "13568"
        },
        "fixed_height_downsampled": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200_d.gif",
          "width": "356",
          "height": "200",
          "size": "263557",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200_d.webp",
          "webp_size": "47868"
        },
        "preview": {
          "width": "295",
          "height": "166",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-preview.mp4",
          "mp4_size": "34189"
        },
        "fixed_height_small": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100.gif",
          "width": "178",
          "height": "100",
          "size": "279088",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100.mp4",
          "mp4_size": "36325",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100.webp",
          "webp_size": "69956"
        },
        "downsized_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-downsized_s.gif",
          "width": "480",
          "height": "270",
          "size": "69254"
        },
        "downsized": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1659260"
        },
        "downsized_large": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1659260"
        },
        "fixed_width_small_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100w_s.gif",
          "width": "100",
          "height": "56",
          "size": "5781"
        },
        "preview_webp": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-preview.webp",
          "width": "252",
          "height": "142",
          "size": "48084"
        },
        "fixed_width_still": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w_s.gif",
          "width": "200",
          "height": "112",
          "size": "17011"
        },
        "fixed_width_small": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100w.gif",
          "width": "100",
          "height": "56",
          "size": "105854",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100w.mp4",
          "mp4_size": "18690",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/100w.webp",
          "webp_size": "34700"
        },
        "downsized_small": {
          "width": "480",
          "height": "270",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-downsized-small.mp4",
          "mp4_size": "129087"
        },
        "fixed_width_downsampled": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w_d.gif",
          "width": "200",
          "height": "112",
          "size": "99490",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200w_d.webp",
          "webp_size": "22772"
        },
        "downsized_medium": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1659260"
        },
        "original": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.gif",
          "width": "480",
          "height": "270",
          "size": "1659260",
          "frames": "22",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.mp4",
          "mp4_size": "129087",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.webp",
          "webp_size": "263162",
          "hash": "00a9a2f234b1a24b9d282bb0ecaaeb95"
        },
        "fixed_height": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200.gif",
          "width": "356",
          "height": "200",
          "size": "934398",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200.mp4",
          "mp4_size": "86777",
          "webp": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/200.webp",
          "webp_size": "175714"
        },
        "looping": {
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-loop.mp4",
          "mp4_size": "1193445"
        },
        "original_mp4": {
          "width": "480",
          "height": "270",
          "mp4": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy.mp4",
          "mp4_size": "129087"
        },
        "preview_gif": {
          "url": "https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-preview.gif",
          "width": "117",
          "height": "66",
          "size": "49779"
        },
        "480w_still": {
          "url": "https://media4.giphy.com/media/3ktRws88PRbBVbbYyE/480w_s.jpg",
          "width": "480",
          "height": "270"
        }
      },
      "title": "boo'd up GIF by Ella Mai",
      "_score": 0
    }
  ],
  "pagination": {
    "total_count": 99180,
    "count": 4,
    "offset": 0
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "5b4566354269536d32bea08a"
  }
}

describe('giphyApi', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockApiResponse)
    );
  });

  test('getTrendingGifs', async () => {
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, getTrendingGifs, { payload: {} }).done;

    expect(result).toMatchSnapshot();
  });
});
