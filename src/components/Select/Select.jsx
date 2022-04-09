
import ReactSelect, { components } from 'react-select';

const Menu = (props) => {

  const styles = {
    borderRadius: 'none',
  }

  return (
    <components.Menu style={styles} {...props}>
      <div>Custom menu List</div>
      {props.children}
    </components.Menu>
  )
}

export default function Select({ customProps, ...props }) {
  return (
    <ReactSelect
      {...props}
      components={{
        Menu
      }}
      styles={{
        menu: (base) => ({
          ...base,
          border: 'none',
          boxShadow: 'none',
          borderRadius: 'none',
        })
      }}
    />
  )
}