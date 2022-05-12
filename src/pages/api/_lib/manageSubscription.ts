import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  //Search user id on FaunaDB
  console.log(subscriptionId, customerId)
}
