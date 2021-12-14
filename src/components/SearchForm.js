const SearchForm = ({ setPageNr, setSearchQry }) => {
  const searchIt = (e) => {
    e.preventDefault();
    //console.log(e.target[0].value);                                             // check
    if (e.target[0].value) {
      setSearchQry(e.target[0].value);
      setPageNr((prev) => [1 - prev[1], prev[1]]);
      console.log(e.target[0].value); // check
    } else {
      alert('Please enter something to search for!');
    }
  };

  return (
    <form style={{ textAlign: 'center' }} onSubmit={searchIt}>
      <input type="text" autoFocus placeholder="enter a query here"></input>
      &nbsp;<button>Search</button>
    </form>
  );
};

export default SearchForm;
