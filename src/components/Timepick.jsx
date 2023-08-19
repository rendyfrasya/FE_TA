import React, { useState,useEffect } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import mqttClient from "../api/mqttAPI";
import api from "../api/index"
let waktuppm;
function Timepick(props) {
  const format = "HH:mm:ss";
  const [defvaluePPM, setdefValuePPM] = React.useState(dayjs(null));
  const [defvaluepH, setdefValuepH] = React.useState(dayjs(null));
  const [defvalueSiram, setdefValueSiram] = React.useState(dayjs(null));

  function subscribeToTopicTemp(topic) {
    console.log(`Subscribing to Topic: ${topic}`);
    mqttClient.subscribe(topic, { qos: 0 });
  }
  const handle = async () => {

    const jadwalPPM = defvaluePPM.format(format);
    const jadwalpH = defvaluepH.format(format);
    const jadwalSiram =defvalueSiram.format(format);
    try{
      mqttClient.publish("/targetWaktuPPM", jadwalPPM.toString(), {
        qos: 0,
        retain: false,
      });
      mqttClient.publish("/targetWaktuPH", jadwalpH.toString(), {
        qos: 0,
        retain: false,
      });
      mqttClient.publish("/targetWaktuSiram", jadwalSiram.toString(), {
        qos: 0,
        retain: false,
      });
      await api.post(`/updatewaktu`, null, {
          params: {
            waktu_siram: jadwalSiram .toString(),
            waktu_ppm: jadwalPPM.toString(),
            waktu_pH: jadwalpH.toString(),
          },
        })
        .then((response) => response.status)
        .catch((err) => console.warn(err));
    }catch{
      console.log(error)
    }
  };
  const button=async()=>{
    await api.get(`/getwaktupompa`).then((response) => {
      console.log(response.data[0].data[0])
      let waktuppm = response.data[0].data[0].waktu_ppm
      let waktuph = response.data[0].data[0].waktu_pH
      let waktusiram = response.data[0].data[0].waktu_siram
      setdefValuePPM(dayjs(waktuppm, format));
      setdefValuepH(dayjs(waktuph , format));
      setdefValueSiram(dayjs(waktusiram, format));
    });
  }
  useEffect(()=>{
    subscribeToTopicTemp("/sendTimePPM");
  },[])
  return (
    <div className="justify-center items-center">
      <div>
        <label
          onClick={button}
          htmlFor="my-modal-4"
          className="btn rounded-2xl w-full h-20 justify-center items-center hover:bg-teal-600 hover:text-base-100 hover:border-base-100 bg-base-100 border-4 border-secondary text-primary">
            <h2 className="normal-case card-title text-2xl xl:text-3xl my-2">Atur Jadwal</h2>
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer jus">
        <label className="modal-box relative" htmlFor="">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker", "TimePicker"]}>
              <div className="grid p-2 gap-7 w-full">
                <TimePicker
                  ampm={false}
                  label={"Jadwal PPM"}
                  value={defvaluePPM}
                  onChange={(newValue) => setdefValuePPM(newValue)}
                />
                 <TimePicker
                  ampm={false}
                  label={"Jadwal pH"}
                  value={defvaluepH}
                  onChange={(newValue) => setdefValuepH(newValue)}
                />
                <TimePicker
                  ampm={false}
                  label="Jadwal Siram"
                  value={defvalueSiram}
                  onChange={(newValue) => setdefValueSiram(newValue)}
                />
                <button onClick={handle} className="btn btn-primary text-white">
                  Ubah
                </button>
              </div>
            </DemoContainer>
          </LocalizationProvider>
        </label>
      </label>
    </div>
  );
}
export default Timepick;
