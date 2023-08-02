import React, { useState } from "react";
import dayjs from "dayjs";
import api from "../api";

function Parameter(props) {
  const format = "HH:mm:ss";
  const [targetPPM,setTargetPPM] = useState('');
  const [targetpH,setTargetpH] = useState('');
  const [kirimPPM,setKirimPPM] = useState('');
  const [kirimpH,setKirimpH] = useState('');

  const button = async () => {
    await api.get(`/gettarget`).then((response) => {
    let getppm = response.data[0].data[0].target_ppm
    let getpH = response.data[0].data[0].target_ph
    setTargetPPM(getppm)
    setTargetpH(getpH)
    });
  };

  const handleChangePPM = (event) => {
    const { target } = event;
    const { value } = target;
    setKirimPPM(value)
  }
  const handleChangepH = (event) => {
    const { target } = event;
    const { value } = target;
    setKirimpH(value)
  }
  
  const handleKirimTarget = async () => {
    kirimPPM ? setTargetPPM(kirimPPM) : ""
    kirimpH ? setTargetpH(kirimpH) : ""
    
    await api
    .post(`/updatetarget`, null, {
      params: {
        target_ppm: kirimPPM,
        target_pH: kirimpH,
      },
    })
    .then((response) => response.status)
    .catch((err) => console.warn(err));
  }
  return (
    <div className="justify-center items-center">
      <div>
        <label
          onClick={button}
          htmlFor="my-modal-5"
          className="btn rounded-2xl w-full h-20 justify-center items-center hover:bg-teal-600 hover:text-base-100 hover:border-base-100 bg-base-100 border-4 border-secondary text-primary">
            <h2 className="normal-case card-title text-2xl xl:text-3xl my-2">Atur Target</h2>
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<label htmlFor="my-modal-5" className="modal cursor-pointer">
  <label className="modal-box relative text-neutral " htmlFor="">
    <div className="grid gap-2">
      <div className="flex gap-2 items-center">
      <input type="number" value={kirimPPM} onChange={handleChangePPM} placeholder="Target PPM" className="input input-bordered input-info w-full max-w-xs" />
      <h2>Target PPM: </h2>
      <h2>{targetPPM}</h2>
      </div>
    
      <div className="flex gap-2 items-center">
      <input type="number" value={kirimpH} onChange={handleChangepH} placeholder="Target pH" className="input input-bordered input-info w-full max-w-xs" />
      <h2>Target pH: </h2>
      <h2>{targetpH}</h2>
      </div>
      <button onClick={() => handleKirimTarget()} className="normal-case text-lg btn btn-primary text-base-100">Kirim Parameter</button>
    </div>
   
    
  </label>
</label>
    </div>
  );
}
export default Parameter;
