import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ClickableFontAwesome(props) {
  return (
    <p><a href={props.href}><FontAwesomeIcon icon={props.icon} /></a></p>
  )
}
