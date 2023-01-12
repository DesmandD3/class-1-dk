import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import style from "../styles/Home.module.css"

export default function CustFooter() {

    return (
        <div style={{ display: 'flex', }}>
            <Image src='transLinkLogo.png'
                style={{
                    width: 200,
                    height: 100,
                    margin: 5,
                }} />
            <Menu style={{ display: 'flex', padding: 20, }}>
                <Menu.Item style={{
                    padding: 10,
                    margin: 5,
                    borderWidth: 3,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    alignItems: 'baseline',
                }}>
                    Getting Around
                </Menu.Item>
                <Menu.Item style={{
                    padding: 10,
                    margin: 5,
                    borderWidth: 3,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    alignItems: 'baseline',
                }}>
                    Resources
                </Menu.Item>
                <Menu.Item style={{
                    padding: 10,
                    margin: 5,
                    borderWidth: 3,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    alignItems: 'baseline',
                }}>
                    Contact Us
                </Menu.Item>
            </Menu>
        </div>
    )

}