import React from 'react';

import GitPreviewStyled, {GifPreviewDivContainter} from './GifPreviewStyled';
import FavoritePin from '../FavoritePin';
import {withRouter} from 'react-router';
import {DETAILS_PATH} from '../../config/routerConstants';

const GifPreview = ({gifDetails, alt, marked, history, escaleFactor = 1}) => {
  return (
    <GifPreviewDivContainter onClick={() => history.push(`${DETAILS_PATH}/${gifDetails.id}`)}>
      <FavoritePin gifReference={gifDetails} marked={marked}/>
      <GitPreviewStyled src={gifDetails.images.preview_gif.url}
        alt={alt}
        width={gifDetails.images.preview_gif.width * escaleFactor + 'px'}
        height={gifDetails.images.preview_gif.height * escaleFactor + 'px'}/>
    </GifPreviewDivContainter>
  );
};

export default withRouter(GifPreview);
