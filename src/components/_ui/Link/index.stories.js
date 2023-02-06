import React from 'react'

import Link from './index'

export default {
    title: 'UI/Link',
    component: Link,
}

export const Primary = (args) => {
    return <Link href="http://example.com">I am a link</Link>
}
