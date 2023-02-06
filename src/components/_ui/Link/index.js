import ClickableCoreElement from '@/components/_ui/ClickableCore'

const Link = (props) => {
    const { type } = props
    // class minipulation
    const baseClasses = ['color-primary']
    const primaryClasses = ['underline', ...baseClasses]
    const linkClasses = primaryClasses.join(' ')

    return <ClickableCoreElement className={linkClasses} {...props} />
}

export default Link
