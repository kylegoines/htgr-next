import { useState } from 'react'

const GridDebug = () => {
    const [debug, setDebug] = useState(false)

    if (process.env.NEXT_PUBLIC_DEBUG === 'development') {
        return (
            <div className="dev-tools">
                <button
                    className="dev-tools-toggle"
                    onClick={() => setDebug(!debug)}
                ></button>
                {debug && <div className="dev-tools-grid"></div>}
            </div>
        )
    } else {
        return null
    }
}

export default GridDebug
