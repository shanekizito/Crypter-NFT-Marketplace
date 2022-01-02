import React, { forwardRef } from 'react';

type JSXButtonProps = JSX.IntrinsicElements['button']

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends JSXButtonProps {
  variant?: ButtonVariant,
  size?: 'small' | 'medium' | 'large',
  rounded?: boolean | 'true',
  outlined?: boolean | 'true',
  icon?: boolean | 'true',
}

const StyledButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, size, rounded, outlined, icon, className, ...other } = props
  const baseClassNameSettings: string = 'font-semibold'

  const sizeClassNameSettings: Record<string, string> = {
    'small': icon ? 'pa-2' : 'py-2 px-4',
    'medium': icon ? 'pa-4' : 'py-4 px-6',
    'large': icon ? 'pa-5' : 'py-5 px-7'
  }

  const textClassNameSettings: Record<ButtonVariant, string> = {
    'primary': (icon || outlined) ? 'text-blue-500' : 'text-white',
    'secondary': 'text-gray-700 hover:text-gray-900'
  }

  const borderClassNameSettings: Record<ButtonVariant, string> = {
    'primary': (outlined) ? 'border border-blue-500' : '',
    'secondary': (outlined) ? 'border border-gray-500 hover:border-gray-800' : ''
  }

  const backgroundClassNameSettings: Record<ButtonVariant, string> = {
    'primary': (icon || outlined) ? '' : 'bg-blue-500 hover:bg-blue-700 text-white',
    'secondary': (icon || outlined) ? '' : 'bg-gray-500 hover:bg-gray-700 text-white'
  }

  const roundedClassNameSettings: string = rounded ? 'rounded-full' : ''

  const configuredClassName: string = [
    baseClassNameSettings,
    sizeClassNameSettings[size ?? 'medium'],
    borderClassNameSettings[variant ?? 'primary'],
    backgroundClassNameSettings[variant ?? 'primary'],
    textClassNameSettings[variant ?? 'primary'],
    roundedClassNameSettings,
    className
  ].join(' ').replace(/\s+/g, ' ').trim()

  return (
    <button ref={ref} className={configuredClassName} { ...other }>
      { props.children }
    </button>
  )
})

export default StyledButton
