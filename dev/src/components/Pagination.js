import { useState, createRef, useEffect } from 'react';

const Pagination = ({ totPages, pageNr, setPageNr }) => {
  //console.log(pageNr[0], totPages); // check
  const [pg, setPg] = useState(pageNr[0] + pageNr[1]);

  const prevBtn = createRef();
  const nextBtn = createRef();
  const handleKeyDown = (event) => {
    //console.log(`Key: ${event.key}  has been pressed`); // check
    if (event.code === 'ArrowLeft') pgBtn(false);
    if (event.code === 'ArrowRight') pgBtn(true);
    if (event.code === 'Home') {
      setPageNr((prev) => [0 + prev[1], prev[1]]);
      setPg(1);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    //                                                              eslint-disable-next-line
  }, []);

  const pgBtn = (bool) => {
    if (bool) {
      console.log('test2', bool, pageNr[0], totPages); // check
      if (pageNr[0] < totPages - pageNr[1]) {
        setPageNr((prev) => [prev[0] + 1, prev[1]]);
        setPg((prev) => prev + 1);
        console.log('true', bool, pageNr[0], totPages); // check
      }
    } else if (pageNr[0] >= pageNr[1]) {
      setPageNr((prev) => [prev[0] - 1, prev[1]]);
      setPg((prev) => prev - 1);
      console.log('false', bool, pageNr[0], totPages); // check
    }
  };

  const changePage = (e) => {
    e.preventDefault();
    setPageNr((prev) => (pageNr = [Number(e.target.value) - prev[1], prev[1]]));
    setPg((prev) => pageNr[0] + pageNr[1]);
    //console.log("Pagination:",pageNr);                                       //check
  };

  return (
    <div style={{ margin: 'auto', textAlign: 'center', width: '90%' }}>
      <form style={{ textAlign: 'center' }}>
        <small>
          Page: {pg} of {totPages}
        </small>
        <br />
        <input
          id="pgRange"
          style={{ width: totPages > 40 ? '80%' : '40%' }}
          type="range"
          min="1"
          step="1"
          max={totPages}
          defaultValue={pg}
          onPointerUp={(e) => changePage(e)}
          onKeyUp={(e) => changePage(e)}
          onChange={(e) => {
            setPg(Number(e.target.value));
            e.target.focus();
          }}
        ></input>
      </form>
      <button id="prev" ref={prevBtn} onClick={() => pgBtn(false)}>
        {'Prev <<'}
      </button>
      <button id="next" ref={nextBtn} onClick={() => pgBtn(true)}>
        {' >> Next'}
      </button>
    </div>
  );
};

export default Pagination;
