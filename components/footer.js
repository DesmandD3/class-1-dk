import React from 'react'
import { Image, Menu } from 'semantic-ui-react'

export default function CustFooter() {

    return (
        <div>
            <Image src='transLinkLogo.png'
                style={{
                    width: 200,
                    height: 100
                }} />
            <Menu>
                <Menu.Item>
                    Getting Around
                </Menu.Item>
                <Menu.Item>
                    Resources
                </Menu.Item>
                <Menu.Item>
                    Contact Us
                </Menu.Item>
            </Menu>
        </div>
    )

}