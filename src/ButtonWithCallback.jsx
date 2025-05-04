import { memo } from 'react';

const ButtonWithCallback = memo(function ButtonWithCallback({ onClick, children }) {
  console.log('ButtonWithCallback ререндерится');
  return <button onClick={onClick}>{children}</button>;
});

export default ButtonWithCallback