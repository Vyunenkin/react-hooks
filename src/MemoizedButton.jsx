import { memo } from 'react';

const MemoizedButton = memo(
  function MemoizedButton({ onClick, label }) {
    console.log('MemoizedButton ререндерится');
    return <button onClick={onClick}>{label}</button>;
  },
);

export default MemoizedButton;