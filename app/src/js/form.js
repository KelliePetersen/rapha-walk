window.onload = function() {
  
  Formio.createForm(document.getElementById('formio'), {
    components: [
      {
        type: 'fieldset',
        legend: 'Contact Information',
        components: [
          {
            type: 'htmlelement',
            content: 'We will send registration confirmation to the email address provided.'
          },
          {
            type: 'textfield',
            key: 'fullName',
            label: 'Full Name',
            placeholder: 'Bob Smith',
            input: true,
            validate: {
              required: true
            }
          },
          {
            type: 'email',
            key: 'email',
            label: 'Email',
            placeholder: 'example@gmail.com',
            input: true,
            validate: {
              required: true
            }
          }
        ]
      },

      {
        type: 'fieldset',
        legend: 'Choose Tickets',
        components: [
          {
            type: 'htmlelement',
            content: '1 ticket per person. Name is required for each ticket.'
          },
          {
            type: 'number',
            label: 'Number of Tickets',
            placeholder: 1,
            input: true,
            validate: {
              required: true,
              min: 1,
              max: 9
            }
          },
          {
            type: 'textfield',
            key: 'ticket1',
            label: 'Name on Ticket #1',
            placeholder: 'Jane Doe',
            input: true,
            validate: {
              required: true
            }
          }
        ]
      },

      {
        type: 'fieldset',
        legend: 'Payment',
        components: [
          {
            type: 'htmlelement',
            content: 'Choose your preferred payment method.'
          },
          {
            type: 'textfield',
            label: 'Name on Card',
            placeholder: 'Bob Smith',
            input: true,
            validate: {
              required: true
            }
          },
          {
            type: 'textfield',
            label: 'Card Number',
            placeholder: '1234-5678-9999-0000',
            input: true,
            validate: {
              required: true
            }
          },
          {
            type: 'textfield',
            label: 'Expiry Date',
            placeholder: '01/21',
            input: true,
            validate: {
              required: true
            }
          },
          {
            type: 'textfield',
            label: 'CVC',
            placeholder: '123',
            input: true,
            validate: {
              required: true
            }
          }
        ]
      },

      {
        type: 'button',
        action: 'submit',
        label: 'Submit',
        theme: 'primary',
        block: true
      }
    ]
  })
}