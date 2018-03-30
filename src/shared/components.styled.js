import styled from 'styled-components';

const hasJustifyContentProp = (props) => ( props.justifyContent || 'initial' );
const hasAlignItemsProp = (props) => ( props.alignItems || 'initial' );

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${hasJustifyContentProp};
  align-items: ${hasAlignItemsProp};
`;