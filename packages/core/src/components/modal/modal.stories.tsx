import formatHtmlPreview from '../../stories/formatHtmlPreview';
import readme from './readme.md';
import { ComponentsFolder } from '../../utils/constants';

export default {
  title: `${ComponentsFolder}/Modal`,
  parameters: {
    layout: 'fullscreen',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4398%3A181325&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=4398%3A181325&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    actionsPosition: {
      name: 'Actions position',
      description:
        "Defines the postion of Modal action's slot - if slot scrolls or stays on top of the content.",
      control: {
        type: 'radio',
      },
      options: ['Sticky', 'Static'],
      table: {
        defaultValue: { summary: 'static' },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the size of Modal.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    headerText: {
      name: 'Modal header',
      description: 'Sets the header text of the Modal.',
      control: {
        type: 'text',
      },
    },
    bodyContent: {
      name: 'Modal body text',
      description: 'Sets the body content of the Modal.',
      control: {
        type: 'text',
      },
    },
    showModal: {
      name: 'Show Modal',
      description: 'Toggles if the Modal is displayed.',
      control: {
        type: 'boolean',
      },
    },
    prevent: {
      name: 'Prevent',
      description: 'Disables closing Modal on clicking on overlay area.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    actionsPosition: 'Static',
    size: 'Large',
    headerText: 'The buttons for the Modal only works in the canvas tab',
    bodyContent:
      'The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there never anything else?” he asked.',
    showModal: true,
    prevent: false,
  },
};

const sizeLookUp = {
  'Large': 'lg',
  'Medium': 'md',
  'Small': 'sm',
  'Extra small': 'xs',
};

const ModalTemplate = ({ actionsPosition, size, headerText, bodyContent, showModal, prevent }) =>
  formatHtmlPreview(
    `
 <!-- The button below is just for demo purposes -->
  <tds-button id="my-modal-button" text="Open Modal"></tds-button>
  
  
  <tds-modal 
    header="${headerText}"
    selector="#my-modal-button"   
    ${showModal ? 'show' : ''} 
    id="my-modal" size="${sizeLookUp[size]}" 
    actions-position="${actionsPosition.toLowerCase()}"
    prevent="${prevent}"
  >          
      <span slot="body">
          ${bodyContent}
      </span>      
      <span slot='actions' class='tds-u-flex tds-u-gap2'>
        <tds-button data-dismiss-modal size="md" text="Delete" variant="danger"></tds-button>
        <tds-button data-dismiss-modal size="md" text="Cancel" variant="secondary"></tds-button>
      </span>      
  </tds-modal>
  
  <!-- The script below is just for demo purposes -->
  <script>
    modal = document.querySelector('tds-modal')
    modal.addEventListener('tdsClose', (event) => {
      console.log(event)
    })
  </script>
  `,
  );

export const Default = ModalTemplate.bind({});
