import React from 'react'
import Input, { InputProps } from '../input/Input'

const ResourceSearch: React.FC<InputProps> = (props) => {
  const { className, ...other } = props
  const [search, setSearch] = React.useState<string>('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.currentTarget.value);

  const containerConfiguredClassName: string = [
    className,
    "border-2 border-current text-gray-300 focus-within:text-gray-600 p-2 relative rounded-md"
  ].join(' ')

  return (
    <div className={containerConfiguredClassName}>
      <Input onChange={onChangeHandler} { ...other } />

      { search }
    </div>
  )
}

export default ResourceSearch
