import bold from '../../../assets/icons/editor/bold-icon.svg';
import italic from '../../../assets/icons/editor/italic-icon.svg';
import alignCenter from '../../../assets/icons/editor/text-center-icon.svg';
import alignLeft from '../../../assets/icons/editor/text-left-icon.svg';
import alignRight from '../../../assets/icons/editor/text-right-icon.svg';
import underline from '../../../assets/icons/editor/underline-icon.svg';

export const editorConfig = {
  options: ['inline', 'textAlign'],
  inline: {
    isDropdown: false,
    options: ['bold', 'italic', 'underline'],
    className: 'editor-text-option',
    bold: { icon: bold },
    italic: { icon: italic },
    underline: { icon: underline },
  },
  textAlign: {
    isDropdown: false,
    options: ['center', 'left', 'right'],
    center: { icon: alignCenter },
    left: { icon: alignLeft },
    right: { icon: alignRight },
  },
};
