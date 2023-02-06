import dynamic from 'next/dynamic'

const Icon = (props) => {
    const { ...args } = props

    const DynamicIcon = dynamic(
        () => import(`@/components/icons/${props.name}`),
        {
            ssr: true,
        }
    )

    return <DynamicIcon {...props} {...args} />
}

export default Icon
