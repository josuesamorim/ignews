import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'
import { stripe } from '../../../services/stripe'

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  //Search user id on FaunaDB
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_stripe_customer_id'), customerId))
    )
  )
  //Retrive subscriptioId on Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  //Which data I want save on FaunaDB
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    priceId: subscription.items.data[0].price.id
  }

  if (createAction) {
    //Saving data on faunaDB
    await fauna.query(
      q.Create(q.Collection('subscriptions'), { data: subscriptionData })
    )
  } else {
    //Update data on faunaDB
    await fauna.query(
      q.Replace(
        q.Select(
          'ref',
          q.Get(q.Match(q.Index('subscription_by_id'), subscriptionId))
        ),
        { data: subscriptionData }
      )
    )
  }
}
