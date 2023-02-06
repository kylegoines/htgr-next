import ClickableCoreElement from '@/components/_ui/ClickableCore'

const Button = (props) => {
    const { type } = props

    // class minipulation
    const baseClasses = ['py-12', 'px-12']
    const primaryClasses = ['text-inverse', 'bg-inverse', ...baseClasses]
    const secondaryClasses = [
        'text-primary',
        'border',
        'border-primary',
        ...baseClasses,
    ]
    // get button classess for primary or secondary
    let buttonClasses = type === 'secondary' ? secondaryClasses : primaryClasses
    // if we want to add class merge
    buttonClasses = buttonClasses.join(' ')

    return <ClickableCoreElement className={buttonClasses} {...props} />
}

export default Button
