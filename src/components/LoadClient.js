import axios from 'axios';

const LoadClient = ({
  clientUrl,
  dataArray,
  setDataArray,
  setLoading,
  setTotPages,
  setTotPosts
}) => {
  //console.log(clientUrl, dataArray)                                             // check
  let loadError = null;
  const getData = async () => {
    try {
      setLoading(true);
      //console.log(`Url: ${clientUrl}`);                                       // check
      const response = await axios.get(`${clientUrl}`);
      //console.log(response.status);                                           // check
      if (!response.status) {
        throw Error('Couldnt get data.');
      } else {
        //console.log("got response1:",response.data);                         // check
        setDataArray(response.data.hits);
        setTotPages(response.data.nbPages);
        setTotPosts(response.data.nbHits);
        //console.log("got response2:", response.data.page, dataArray);        // check
      }
    } catch (e) {
      loadError = e;
      alert(`${e.message} :( ... click ok to retry `);
      // alert(`${e.message} :( ... retrying loop every 10sec `)
      // setTimeout( () => setState({...state, loadError: null }), 10000);
    }
    setLoading(false);
  };
  !loadError && getData();
};

export default LoadClient;
