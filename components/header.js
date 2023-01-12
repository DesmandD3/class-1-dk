import React from 'react'
import { Header, Image } from 'semantic-ui-react'

import style from "../styles/Home.module.css"

export default function CustHeader() {

    return (

        <Header className={style.img} as='h1' content='Expo Line Station Map'>
            <Image
                src='transLinkLogo.png'
                style={{
                    width: 200,
                    height: 100,
                    marginTop: 25,
                    marginLeft: 25,
                }} />
        </Header>
    )
}

// image='transLinkLogo.png'