import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function TextContainer() {
    return (
        <Container text>
            <Header as='h3'>History</Header>
            < br />
            <p>
                The Expo Line is the oldest line of the SkyTrain rapid transit
                system in the Metro Vancouver region of British Columbia, Canada.
                The line is owned and operated by BC Rapid Transit Company,
                a subsidiary of TransLink, and links the cities of Vancouver,
                Burnaby, New Westminster and Surrey. <br />
                The line was originally known only as "the SkyTrain" from its
                inception in 1985 until 2002, as it was the system's only line
                during this time. In 2002, after the opening of the system's
                second line, the Millennium Line, the original line was given the
                name "Expo Line". The new name was in recognition of Expo 86
                (the World's Fair that Vancouver hosted in 1986) as the transit
                system had been built in large part as a showcase and an attraction
                for that fair.
            </p>
        </Container>
    )
}

{/* <Container text>
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
</Container> */}