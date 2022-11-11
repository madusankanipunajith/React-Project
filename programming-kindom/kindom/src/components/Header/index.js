import React from 'react'
import { ThemeContext } from './../../providers/theme/index';

function Header() {
    const theme = React.useContext(ThemeContext)

    return (
        <h1 style={{color: theme.foreground}}>Welcome to the PC</h1>
    )
}

export default Header