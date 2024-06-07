import SearchForm from './SearchForm';
import ShowPosts from './ShowPosts';
import Pagination from './Pagination';

const ShowData = ({
  loading,
  dataArray,
  totPages,
  pageNr,
  setPageNr,
  setSearchQry,
  totPosts,
  searchQry
}) => {
  //console.log(dataArray)                                                          //check

  return (
    <>
      <SearchForm setPageNr={setPageNr} setSearchQry={setSearchQry} />

      {Object.keys(dataArray).length > 0 ? (
        <>
          <Pagination
            totPages={totPages}
            pageNr={pageNr}
            setPageNr={setPageNr}
          />
          <br />
          <ShowPosts
            loading={loading}
            dataArray={dataArray}
            totPosts={totPosts}
            searchQry={searchQry}
          />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>
          {' '}
          ... No search results returned ...{' '}
        </p>
      )}
    </>
  );
};
export default ShowData;
