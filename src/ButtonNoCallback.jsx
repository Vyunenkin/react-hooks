function ButtonNoCallback({ onClick, children }){
  console.log('ButtonNoCallback ререндерится');
  return <button onClick={onClick}>{children}</button>;
};

export default ButtonNoCallback