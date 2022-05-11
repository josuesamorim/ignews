import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user, user:email'
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_email'), q.Casefold(user.email)))
            ),
            q.Create(q.Collection('users'), {
              data: {
                email: user.email,
                name: user.name
              }
            }),
            q.Get(q.Match(q.Index('user_email'), q.Casefold(user.email)))
          )
        )
        return true
      } catch {
        console.log('Houve um problema ao salvar os dados no DB')
        return false
      }
    }
  }
})
