import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function TextContainer2() {
    return (
        <Container text style={{
            marginTop: '1em',
            margin: 20,
            padding: 20,
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: '#1C6EA4'
        }}>
            <Header as='h3'>Expo Line</Header>
            <p>
                The Expo Line operates two routes:<br />
                <br />
                Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
                Waterfront Station (Downtown Vancouver) to Production Way/University Station (Burnaby)
                <br />
                Transfer to the Millennium Line at the following stations:
                <br />
                Commercial/Broadway Station
                Lougheed Town Centre Station
                Production Way/University Station
                <br />
                Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
                <br />
                Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
            </p>
        </Container>
    )
}
