import React, { useState } from "react";
import dayjs from "dayjs";
import api from "../api";

function TimepickKW(props) {
  const format = "HH:mm:ss";
  const [defvalue1, setdefValue1] = React.useState(dayjs(null));
  const [defvalue2, setdefValue2] = React.useState(dayjs(null));
  const handle = async () => {
    const jadwal1 = defvalue1.format(format);
    const jadwal2 = defvalue2.format(format);
  };
  const button = async () => {
    setdefValue1(dayjs(props.handle1, format));
    setdefValue2(dayjs(props.handle2, format));
  };

  return (
    <div className="justify-center items-center">
      <div>
        <label
          onClick={button}
          htmlFor="my-modal-3"
          className="btn rounded-2xl w-full h-20 justify-center items-center hover:bg-teal-600 hover:text-base-100 hover:border-base-100 bg-base-100 border-4 border-secondary text-primary">
            <h2 className="normal-case card-title text-2xl xl:text-3xl my-2">Atur Knajut</h2>
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<label htmlFor="my-modal-3" className="modal cursor-pointer">
  <label className="modal-box relative text-neutral" htmlFor="">
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>
    </div>
  );
}
export default TimepickKW;
