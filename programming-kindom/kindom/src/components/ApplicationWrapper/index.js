import React from 'react'
import { ThemeContext } from '../../providers/theme'

function ApplicationWrapper(props) {
    const theme = React.useContext(ThemeContext)

  return (
    <div style={{backgroundColor: theme.background}}>
        {props.children}
    </div>
  )
}

export default ApplicationWrapper