import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Tooltip from '../Tooltip';
import Button from '../../button';

// CSF format story
export const all = () => {
  const position = select(
    'position',
    ['top', 'bottom', 'left', 'right'],
    'bottom'
  );
  const appendToBody = boolean('appendToBody', false);
  const tooltip = text('tooltip', 'An awesome tooltip');

  const options = {
    tooltip,
    position,
    appendToBody
  };

  return (
    <div style={{ marginTop: '30px', marginLeft: '150px' }}>
      <Tooltip {...options} >
        <Button>{position}</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Atoms|Tooltip',
  component: Tooltip
};
