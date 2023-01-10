import React from 'react'
import { Header } from 'semantic-ui-react'

import style from "../styles/Home.module.css"

export default function CustHeader() {

    return (
        <Header className={style.img} as='h1'
            image='transLinkLogo.png'
            content='Expo Line'>
        </Header>
    )
}