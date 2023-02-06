import React from 'react'

import Button from './index'

export default {
    title: 'UI/Button',
    component: Button,
}

export const Primary = (args) => {
    return <Button icon="star">hello world</Button>
}

export const Secondary = (args) => {
    return (
        <Button icon="star" type="secondary" iconPosition="before">
            goodbye world
        </Button>
    )
}
