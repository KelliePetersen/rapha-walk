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
            input: true
          },
          {
            type: 'email',
            key: 'email',
            label: 'Email',
            placeholder: 'example@gmail.com',
            input: true
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
            input: true,
            validate: {
              min: 1,
              max: 9
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
            input: true
          },
          {
            type: 'textfield',
            label: 'Card Number',
            input: true
          },
          {
            type: 'textfield',
            label: 'Expiry Date',
            input: true
          },
          {
            type: 'textfield',
            label: 'CVC',
            input: true
          }
        ]
      },

      {
        type: 'button',
        action: 'submit',
        label: 'Submit',
        theme: 'primary'
      }
    ]
  })
}