import { style } from 'typestyle';
import SharedStyles from './shared-styles';

export
namespace TagStyleClasses {

  export
  const tagLabelStyleClass = style({
    maxWidth: '100%',
    // whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    overflow: 'hidden',
    boxSizing: 'border-box',
    paddingRight: '25px'
  });
  
  export
  const defaultAddInputStyleClass = style(SharedStyles.tagInputStyleProperties, {
    width: '64.52px',
    minWidth: '64.52px'
  });
  
  export
  const blankAddInputStyleClass = style(SharedStyles.tagInputStyleProperties, {
    display: 'inline',
    whiteSpace: 'nowrap'
  });
  
  export
  const addTagStyleClass = style(SharedStyles.tagStyleProperties, {
    backgroundColor: 'var(--jp-layout-color1)',
    border: '1px solid var(--jp-layout-color4)',
    maxWidth: '95%'
  });
  
  export
  const tagIconStyleClass = style({
    marginLeft: '10px',
    marginTop: '2px',
    right: '0px',
    marginBottom: '-1px',
    height: '13px',
    position: 'absolute'
  });
  
  export
  const inputIconStyleClass = style({
    marginLeft: '5px',
    marginTop: '2px',
    marginBottom: '-1px',
    height: '13px'
  });

  export
  const tagIconLabelStyleClass = style({
    position: 'absolute'
  });

}
