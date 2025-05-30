function RegularButton({ onClick, label }) {
  console.log('RegularButton ререндерится');
  return <button onClick={onClick}>{label}</button>;
}

export default RegularButton;
