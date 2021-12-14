// "start": "react-scripts --openssl-legacy-provider start",
// https://react-bootstrap.github.io/components/alerts/
// import "bootswatch/dist/[theme]/bootstrap.min.css"; -- Theme: spacelab -- is linked in index.html!!
//----------------------------------------------------------
import React, { useState, useEffect } from 'react';
//----------------------------------------------------------
import ProjName from './components/ProjectName';
import LoadData from './components/LoadData';
import LoadClient from './components/LoadClient';
//----------------------------------------------------------
import './styles.css';

const App = () => {
  //--------------------------------------------------------
  const [dataArray, setDataArray] = useState(['Await data...']);
  const [searchQry, setSearchQry] = useState('');
  const [totPages, setTotPages] = useState(0);
  const [totPosts, setTotPosts] = useState(0);
  const [pageNr, setPageNr] = useState([0, 1]); // 0,1  or  1,0  only  (check api initial page)
  const [loading, setLoading] = useState(false);
  //const [clientUrl, setClientUrl]  = useState(`https://hn.algolia.com/api/v1/search?query=${searchQry}&tags=story&${hitsPerPg}&page=${pageNr[0]}`);

  //local variables ---------------------------------
  const hitsPerPg = 'hitsPerPage=20';
  const clientUrl = `https://hn.algolia.com/api/v1/search?query=${searchQry}&tags=story&${hitsPerPg}&page=${pageNr[0]}`;

  useEffect(() => {
    //console.log(clientUrl, dataArray)                                             // check
    LoadClient({
      clientUrl,
      dataArray,
      setDataArray,
      setLoading,
      setTotPages,
      setTotPosts
    });
    //                                                                eslint-disable-next-line
  }, [clientUrl, searchQry, pageNr[0]]); //

  //-------------------------------------------------
  return (
    <div className="App">
      <ProjName projectName={process.env.REACT_APP_PROJECT_NAME} />

      {dataArray === undefined ? (
        <div>... this is my REACT boilerplate ...</div>
      ) : (
        <LoadData
          loading={loading}
          dataArray={dataArray}
          totPages={totPages}
          pageNr={pageNr}
          setPageNr={setPageNr}
          setSearchQry={setSearchQry}
          totPosts={totPosts}
          searchQry={searchQry}
        />
      )}
    </div>
  );
};

export default App;
