// A reference to Stripe.js initialized with a fake API key.
//Sign in to see examples pre-filled with your key.
var stripe = Stripe("pk_test_51HDImFFT6ZSadiWVhtJ5lyGHFd4qFSbmenNvDBEPPUpPQ2swRvNVeQ3y1pMnyxGIxeW13RZjaFRqMV1QKZUs5lmg00xGXptUAL");

var orderData = {
  items: [{ id: "photo-subscription" }],
  currency: "usd"
};
function GetRequest() {  
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();  
    if (url.indexOf("?") != -1) {  
       var str = url.substr(1);  
       strs = str.split("&");  
       for(var i = 0; i < strs.length; i ++) {  
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
       }  
    }  
    return theRequest;  
 }  
// Disable the button until we have Stripe set up on the page
document.querySelector("button").disabled = true;

fetch("/api/payment/stripe/"+GetRequest()['orderNum'], {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(orderData)
})
  .then(function(result) {
    return result.json();
  })
  .then(function(data) {
    return setupElements(data);
  })
  .then(function({card,clientSecret }) {
    document.querySelector("button").disabled = false;
    console.log('s',clientSecret)
    // Handle form submission.
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Initiate payment when the submit button is clicked
      pay(card,clientSecret);
    });
  });

// Set up Stripe.js and Elements to use in checkout form
var setupElements = function(data) {
  console.log(data)
  var elements = stripe.elements();
  var style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var card = elements.create("card", { style: style });
  card.mount("#card-element");

  return {
    card,
    clientSecret: data.data.clientSecret
  };
};

/*
 * Calls stripe.confirmCardPayment which creates a pop-up modal to
 * prompt the user to enter extra authentication details without leaving your page
 */
var pay = function(card, clientSecret) {
  changeLoadingState(true);

  // Initiate the payment.
  // If authentication is required, confirmCardPayment will automatically display a modal
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card
      }
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        showError(result.error.message);
      } else {
        // The payment has been processed!
        orderComplete(clientSecret);
      }
    });
};

/* ------- Post-payment helpers ------- */

/* Shows a success / error message when the payment is complete */
var orderComplete = function(clientSecret) {
  // Just for the purpose of the sample, show the PaymentIntent response object
  stripe.retrievePaymentIntent(clientSecret).then(function(result) {
    var paymentIntent = result.paymentIntent;
    var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);

    document.querySelector(".sr-payment-form").classList.add("hidden");
    document.querySelector("pre").textContent = paymentIntentJson;

    document.querySelector(".sr-result").classList.remove("hidden");
    setTimeout(function() {
      document.querySelector(".sr-result").classList.add("expand");
    }, 200);

    changeLoadingState(false);
  });
};

var showError = function(errorMsgText) {
  changeLoadingState(false);
  var errorMsg = document.querySelector(".sr-field-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};