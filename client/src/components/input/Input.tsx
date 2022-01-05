import React from 'react'
import { IconContext } from 'react-icons';

type JSXInputProps = JSX.IntrinsicElements['input']

export interface InputProps extends JSXInputProps {
  InputAdornment?: React.ReactNode
  StartAdornment?: React.ReactNode
}

const Input: React.FC<InputProps> = (props) => {
  const {
    InputAdornment,
    ...other
  } = props

  const inputAdornmentClassNameSettings: string = props.InputAdornment ? 'pr-7' : ''
  const inputResetClassNameSettings: string = 'outline-0 hover:outline-0 focus:outline-none focus:border-0'

  const inputConfiguredClassName: string = [
    inputAdornmentClassNameSettings,
    inputResetClassNameSettings
  ].join(' ').replace(/\s+/g, ' ').trim()

  return (
    <div className="relative">
      <input className={inputConfiguredClassName} { ...other } />

      { InputAdornment && (
        <div className="absolute top-2/4 right-2 -translate-y-2/4">
          <IconContext.Provider value={{ size: "1.5em" }}>
            { InputAdornment }
          </IconContext.Provider>
        </div>
      )}
    </div>
  )
}

export default Input;
