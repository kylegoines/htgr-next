// clickable core is the gummy stuff that holds Button and Link together,
// functionally they are very similar with very much the same attributes so it makes sense to unify them

import { useCallback } from 'react'
import Icon from '@/components/_ui/Icon'

const ClickableCoreElement = (props) => {
    const {
        isStatic,
        children,
        href,
        type,
        label,
        icon,
        onClick,
        className,
        iconPosition,
        ...attrs
    } = props

    const isLink = href ? true : false
    const hasIcon = icon ? true : false

    const setTag = useCallback(() => {
        if (isStatic) {
            return `span`
        } else if (isLink) {
            return `a`
        } else {
            return 'button'
        }
    }, [isStatic, isLink])

    const handleClick = useCallback(() => {
        if (!onClick) return
        onClick()
    })

    // set a dynmaic tag based on props
    const CustomEl = setTag()

    return (
        <CustomEl
            {...attrs}
            {...(href ? { href: href } : {})}
            className={className}
            aria-label={label}
            onClick={handleClick}
        >
            <span className="flex items-center">
                {/* if has icon and position is before */}
                {hasIcon && iconPosition === 'before' ? (
                    <span className="mr-8">
                        <Icon name={icon} />
                    </span>
                ) : null}
                {children}
                {/* if icon position isnt 'before' (default to after) */}
                {hasIcon && iconPosition !== 'before' ? (
                    <span className="ml-8">
                        <Icon name={icon} />
                    </span>
                ) : null}
            </span>
        </CustomEl>
    )
}

export default ClickableCoreElement
