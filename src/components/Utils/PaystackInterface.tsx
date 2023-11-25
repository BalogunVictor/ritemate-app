export const HandlePayment = (email: string, amount: number) => {
  const handler = PaystackPop.setup({
    amount: amount * 100,

    // Replace with a reference you generated
    callback: function (response: any) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },

    // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: 'NGN',

    // Replace with your public key
    email,

    key: 'pk_test_5df8ef61f20ec6f02d1584567a0961d37bb4438d',

    onClose: function () {
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
};
