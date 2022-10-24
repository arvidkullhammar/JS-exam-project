import React, { ReactNode, Children, ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface Props extends LinkProps {
  children: ReactNode
}

function CustomLink({ href, children, ...props }: Props) {
  const { asPath } = useRouter()
  const child = Children.only(children) as ReactElement
  const childClassName = child.props.className || ''
  const className = href === asPath ? `${childClassName} active` : childClassName

  return (
    <Link href={href} {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default CustomLink
