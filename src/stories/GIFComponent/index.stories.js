import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Component
import { GIFComponent } from '../../components';

// Mock Data
import { gifComponentData } from '../mockData';

storiesOf('GIF Component', module).add(
  'Default',
  withInfo({
    inline: true,
    propTables: [
      {
        displayName: 'GIF Component',
        propTypes: {
          onClick: PropTypes.func.isRequired,
          gifData: PropTypes.object.isRequired,
          id: PropTypes.string
        }
      }
    ],
    propTablesExclude: [GIFComponent],
    text: `This is the container used for the gifs.`
  })(() => (
    <GIFComponent
      onClick={() => {
        alert('GIF clicked');
      }}
      gifData={gifComponentData[0]}
    />
  ))
);
