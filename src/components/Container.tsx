"use client";

import { Container as BootstrapContainer } from 'react-bootstrap'

export function Container (props: any) {

    const { children } = props

  return (
    <BootstrapContainer fluid>
        {children}
    </BootstrapContainer>
  )
}