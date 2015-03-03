
# Codius Example Subscription Payments

Authorize a ripple user to withdraw funds each month up to a certain
amount, but no more.


## Installation

To use this contract upload it to a Codius host and provide funding to
start the application.

    git clone https://github.com/codius/codius-example-subscription-payments

    cd codius-example-subscription-payments

    export CODIUS_HOST=https://ireland.codiustest.net

    codius upload

## Usage

Once the contract is uploaded Codius returns a URL with subdaomin at which you
can interact with the application you just created. Use the URL ad the base
for all subsequent API calls.

To create a subscription payment submit a post request to the contract
indicating the period of the subscription in milliseconds (monthly, daily, etc),
the amount to debit each period, the credited account address and the secret
of the debited account.

````
POST /subscriptions

request:
{
  "destination": "rpqaw5YMFUFi8AtSQj6sTYBCixaJ3ywDx4",
  "asset": "XAG",
  "amount": "10",
  "period": "60000",
  "secret": "shQTSQ1zn6MKdoecrZUzzFKx4Ruue"
}

response:
{
  "success": true,
  "subscription": {
    "uid": "9ee101b1-a9ce-41e4-8ae0-51706709597e"
    "created": "2015-03-03T20:07:51.265Z"
    "destination": "rpqaw5YMFUFi8AtSQj6sTYBCixaJ3ywDx4",
    "asset": "XAG",
    "amount": "10",
    "period": "60000"
  }
}
````

In order to trigger a payment make a call to the subcription
payments endpoint. If the period has expired since the last
payment was made the Codius application will sign and submit
a new payment, after which all requests for payment will fail
until the period passes once again.

````
POST /subscriptions/9ee101b1-a9ce-41e4-8ae0-51706709597e/payments
````

