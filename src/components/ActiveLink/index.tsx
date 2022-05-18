import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const classNameVeririfation = asPath == rest.href ? activeClassName : ''

  console.log(rest.href)
  return (
    <Link {...rest}>
      {cloneElement(children, { classNameVeririfation })}
    </Link>
  )
}
