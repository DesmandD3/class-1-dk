import React from 'react'
import {
    Grid,
    Divider,
    Segment
} from 'semantic-ui-react'

export default function CustFooter() {

    return (

            <Segment position='relative'>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <p>
                        one
                    </p>
                    <p>
                        one
                    </p>
                    <p>
                        one
                    </p>
                </Grid.Column>

                <Grid.Column>
                    <p>
                        one
                    </p>
                    <p>
                        one
                    </p>
                    <p>
                        one
                    </p>
                </Grid.Column>
            </Grid>

            <Divider vertical='true'></Divider>

        </Segment>
        )

}