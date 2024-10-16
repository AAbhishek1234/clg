import React, { useState, useEffect } from 'react';
import { DNA } from 'react-loader-spinner'; 

function Loder() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("");
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container" style={{ textAlign: 'center', marginTop: '50px' }}>
          render(<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />)   
        </div>
      ) : (
        <div>
          <h1>{data}</h1>
        </div>
      )}
    </div>
  );
}

export default Loder;
