import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function TextContainer2() {
    return (
        <Container text>
            <Header as='h3'>Expo Line</Header>
            <p>
                The Expo Line operates two routes:<br />
                <br />
                <ul>
                    <li>
                        Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
                    </li>
                    <li>
                        Waterfront Station (Downtown Vancouver) to Production Way/University Station (Burnaby)
                    </li>
                </ul>
                <br />
                <p>
                    Transfer to the Millennium Line at the following stations:
                </p>
                <br />
                <ul>
                    <li>
                        Commercial/Broadway Station
                    </li>
                    <li>
                        Lougheed Town Centre Station
                    </li>
                    <li>
                        Production Way/University Station
                    </li>
                </ul>
                <br />
                <p>
                    Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
                </p>
                <br />
                <p>
                    Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
                </p>
            </p>
        </Container>
    )
}
