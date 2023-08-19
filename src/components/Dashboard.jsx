import { React, useEffect, useState } from "react";
import {TbTemperature} from "react-icons/tb";
import {WiHumidity, WiMoonThirdQuarter} from "react-icons/wi"
import {RiWaterFlashFill} from "react-icons/ri"
import {BiWater} from "react-icons/bi"
import {GiPlantWatering} from "react-icons/gi"
import Timepick from "./Timepick";
import Parameter from "./Parameter";
import mqttClient from "../api/mqttAPI";
import api from "../api/index"

var temperature;
var nilaiPPM;
var nilaipH;
var waterTemperature;
var humidity;
var humMed;
let buttonPPMU;
let buttonPPMD;
let buttonPHU;
let buttonPHD;

function Dashboard(){
  const [tombolPPMD, setTombolPPMD] = useState(true);
  const [tombolPPM, setTombolPPM] = useState(true);
  const [tombolpHUp, setTombolpHUp] = useState(true);
  const [tombolpHDown, setTombolpHDown] = useState(true);
  const [tombolSiram, setTombolSiram] = useState(true);
  const [dataSensor, setDataSensor] = useState([]);
  const [targetPPM,setTargetPPM] = useState();
  const [targetpH,setTargetpH] = useState();
  const [suhu,setSuhu] = useState();
  const [suhuAir,setSuhuAir] = useState();
  const [kelembaban,setKelembaban] = useState();
  const [kelembaban_med,setKelembaban_med] = useState();
  const [ppm,setPPM] = useState();
  const [pH,setNilaipH] = useState();
  const [tombol1,setTombol1] = useState(1);
  const [tombol2,setTombol2] = useState(1);
  const [tombol3,setTombol3] = useState(1);
  const [tombol4,setTombol4] = useState(1);
  const [tombolArdu1,setTombolArdu1] = useState(false);
  const [tombolArdu2,setTombolArdu2] = useState(false);
  const [tombolArdu3,setTombolArdu3] = useState(false);
  const [tombolArdu4,setTombolArdu4] = useState(false);
  // const getData1 = async () => {
  //   await api.get(`/getsingledata`).then((response) => {
  //     setDataSensor(response.data[0].data)
  //   });
  //     setTimeout(() => {
  //       getData1();
  //     }, 1000);
  // };
const startAwal = async () => {
    if (tombolArdu1 == "1"){
      setTombol1("0")
    }else{
      setTombol1("1")
    }
  };
  const getDataTarget = async () => {
    
    await api.get(`/gettarget`).then((response) => {
      let getppm = response.data[0].data[0].target_ppm
      let getpH = response.data[0].data[0].target_pH
      setTargetPPM(getppm)
      setTargetpH(getpH)
    });
      setTimeout(() => {
        getDataTarget();
      }, 1000);
  };

  // const getDataTombolPPMD = async () => {
  //   await api.get(`/getppmD`).then((response) => {
  //     let datapompa = response.data[0].data;
  //     const datapompadb = datapompa.map((u) => u.pompa_ppmD).toString();
  //     if (datapompadb == 1) {
  //       setTombolPPMD(true);
  //     } else {
  //       setTombolPPMD(false);
  //     }
  //   });
  //   setTimeout(() => {
  //     getDataTombolPPMD();
  //   }, 1000);
  // };

  // const getDataTombolPPMU = async () => {
  //   await api.get(`/getppmU`).then((response) => {
  //     let datapompa = response.data[0].data;
  //     const datapompadb = datapompa.map((u) => u.pompa_ppmU).toString();
  //     if (datapompadb == 1) {
  //       setTombolPPM(true);
  //     } else {
  //       setTombolPPM(false);
  //     }
  //   });
  //   setTimeout(() => {
  //     getDataTombolPPMU();
  //   }, 1000);
  // };

  // const getDataTombolpHU = async () => {
  //   await api.get(`/getphU`).then((response) => {
  //     let datapompa = response.data[0].data;
  //     const datapompadb = datapompa.map((u) => u.pompa_pHU).toString();
  //     if (datapompadb == 1) {
  //       setTombolpHUp(true);
  //     } else {
  //       setTombolpHUp(false);
  //     }
  //   });
  //   setTimeout(() => {
  //     getDataTombolpHU();
  //   }, 1000);
  // };

  // const getDataTombolpHD = async () => {
  //   await api.get(`/getphD`).then((response) => {
  //     let datapompa = response.data[0].data;
  //     const datapompadb = datapompa.map((u) => u.pompa_pHD).toString();
  //     if (datapompadb == 1) {
  //       setTombolpHDown(true);
  //     } else {
  //       setTombolpHDown(false);
  //     }
  //   });
  //   setTimeout(() => {
  //     getDataTombolpHD();
  //   }, 1000);
  // };

  // const handleTombolPPM = async () => {
  //   if (tombolPPM == true) {
  //     setTombolPPM(false);
  //     await api
  //       .post(`/pompappmU`, null, {
  //         params: {
  //           pompa_ppmU: 0,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   } else {
  //     setTombolPPM(true);
  //     await api
  //       .post(`/pompappmU`, null, {
  //         params: {
  //           pompa_ppmU: 1,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   }
  // };

  // const handleTombolPPMD = async () => {
  //   if (tombolPPMD == true) {
  //     setTombolPPMD(false);
  //     await api
  //       .post(`/pompappmD`, null, {
  //         params: {
  //           pompa_ppmD: 0,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   } else {
  //     setTombolPPMD(true);
  //     await api
  //       .post(`/pompappmD`, null, {
  //         params: {
  //           pompa_ppmD: 1,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   }
  // };

  // const handleTombolpHU = async () => {
  //   if (tombolpHUp == true) {
  //     setTombolpHUp(false);
  //     await api
  //       .post(`/pompapHU`, null, {
  //         params: {
  //           pompa_pHU: 0,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   } else {
  //     setTombolpHUp(true);
  //     await api
  //       .post(`/pompapHU`, null, {
  //         params: {
  //           pompa_pHU: 1,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   }
  // };
  // const handleTombolpHD = async () => {
  //   if (tombolpHDown == true) {
  //     setTombolpHDown(false);
  //     await api
  //       .post(`/pompapHD`, null, {
  //         params: {
  //           pompa_pHD: 0,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   } else {
  //     setTombolpHUp(true);
  //     await api
  //       .post(`/pompapHD`, null, {
  //         params: {
  //           pompa_pHD: 1,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   }
  // };

  // const handleTombolSiram = async () => {
  //   if (tombolSiram == true) {
  //     setTombolSiram(false);
  //     await api
  //       .post(`/pompasiram`, null, {
  //         params: {
  //           pompa_siram: 0,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   } else {
  //     setTombolSiram(true);
  //     await api
  //       .post(`/pompasiram`, null, {
  //         params: {
  //           pompa_siram: 1,
  //         },
  //       })
  //       .then((response) => response.status)
  //       .catch((err) => console.warn(err));
  //   }
  // };
  // function connectToBroker() {
  //   const clientId = "clientTesting";
  
  //   // Change this to point to your MQTT broker
  //   const hostURL = `${protocol}://${mqttHost}:${port}`;
  
  //   const options = {
  //     keepalive: 60,
  //     clientId: clientId,
  //     protocolId: "MQTT",
  //     protocolVersion: 4,
  //     clean: true,
  //     reconnectPeriod: 1000,
  //     connectTimeout: 30 * 1000,
  //   };
  
  //   mqttClient = mqtt.connect(hostURL, options);
  
  //   mqttClient.on("error", (err) => {
  //     console.log("Error: ", err);
  //     mqttClient.end();
  //   });
  // }
  
  function subscribeToTopicTemp(topic) {
    console.log(`Subscribing to Topic: ${topic}`);
    mqttClient.subscribe(topic, { qos: 0 });
  }
  const validateRelay=async()=>{
    try{
      mqttClient.on("message", (topic, message, packet) => {
        if(topic === '/buttonPPMU'){
         buttonPPMU = message.toString();
       }
       if(topic === '/buttonPPMD'){
         buttonPPMD = message.toString();
       }
       if(topic === '/buttonPHU'){
        buttonPHU = message.toString();
      }
      if(topic === '/buttonPHD'){
        buttonPHD = message.toString();
      }
       setTombolArdu1(buttonPPMU);
       setTombolArdu2(buttonPPMD);
       setTombolArdu3(buttonPHU);
       setTombolArdu4(buttonPHD);
      })
    }catch{
      console.log(error)
    }
  }
 const terimaSuhu = async() =>{
    // Received Message
    try{
      mqttClient.on("message", (topic, message, packet) => {
        if (topic === '/mqttTemp') {
          temperature = message.toString();
        }
        if (topic === '/mqttHum') {
          humidity = message.toString();
        }
        if (topic === '/mqttWaterTemp') {
          waterTemperature = message.toString();
        }
        if (topic === '/mqttPPM') {
          nilaiPPM = message.toString();
        }
        if (topic === '/mqttpH') {
          nilaipH = message.toString();
        }
        if (topic === '/mqttHumMed') {
          humMed = message.toString();
        }
        setSuhu(temperature);
        setKelembaban(humidity); 
        setSuhuAir(waterTemperature);
        setPPM(nilaiPPM);
        setNilaipH(nilaipH);
        setKelembaban_med(humMed)
      });
    }catch{
      console.log(error)
    }

 };
const handleTombol1 = async() => {
  try{
    if(tombol1 == "0"){
      setTombol1("1");
    }else{
      setTombol1("0");
    }
    mqttClient.publish("/relayPPMUP", tombol1.toString(), {
      qos: 0,
      retain: false,
    });
    
  }
  catch{
    console.log(error)
  }
}
const handleTombol2 = async() =>  {
  try{
  if(tombol2 == "0"){
    setTombol2("1");
  }else{
    setTombol2("0");
  }
  mqttClient.publish("/relayPPMDOWN", tombol2.toString(), {
    qos: 0,
    retain: false,
  });
}catch{
  console.log(error)
}
}
const handleTombol3 = async() =>  {
  try{
  if(tombol3 == "0"){
    setTombol3("1");
  }else{
    setTombol3("0");
  }
  mqttClient.publish("/relayPHU", tombol3.toString(), {
    qos: 0,
    retain: false,
  });
}catch{
  console.log(error)
}
}
const handleTombol4 = async() =>  {
  try{
  if(tombol4 == "0"){
    setTombol4("1");
  }else{
    setTombol4("0");
  }
  mqttClient.publish("/relayPHD", tombol4.toString(), {
    qos: 0,
    retain: false,
  });
}catch{
  console.log(error)
}
}
  useEffect(() => {
    // getData1();
    // getDataTombolPPMD();
    // getDataTombolPPMU();
    // getDataTombolpHU();
    // getDataTombolpHD();
    // getDataTombolSiram();
    // getDataTargetPPM();
    // connectToBroker();
    getDataTarget();
    subscribeToTopicTemp("/mqttTemp");
    subscribeToTopicTemp("/mqttHum");
    subscribeToTopicTemp("/mqttHumMed");
    subscribeToTopicTemp("/mqttWaterTemp");
    subscribeToTopicTemp("/mqttPPM");
    subscribeToTopicTemp("/mqttpH");
    subscribeToTopicTemp("/buttonPPMU");
    subscribeToTopicTemp("/buttonPPMD"); 
    subscribeToTopicTemp("/buttonPHU");
    subscribeToTopicTemp("/buttonPHD");
    terimaSuhu();
    validateRelay();
    startAwal();
  }, []);
  // console.log("ini tombol1 :",tombol1)
  // console.log("ini tombolArdu 1 :",tombolArdu1)
  // console.log("ini tombol2 :",tombol2)
  // console.log("ini tombolArdu 2 :",tombolArdu2)
  return (
    <div className="font-bold">
      <div className="grid w-full xl:flex gap-4 mt-4">
        <div className="w-full">
          <div className="grid gap-4">
          {/* {dataSensor.map((data,id) => ( */}
            <div className="flex flex-col justify-stretch md:flex-row gap-4">

               <div className="card w-[22rem] md:w-1/3 border-4 border-primary">
                <div className="flex-row text-neutral card-body items-center justify-between">
                <div className="flex gap-3 text-start justify-center">
                <div className="grid w-20 h-20 rounded-2xl bg-primary text-white place-content-center">
                <TbTemperature size={60} />
                </div> 
                <div className="grid">
                  <div className="flex justify-between gap-[2rem] md:gap-[9rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">Suhu Udara</h2>
                  <h2 className="card-title text-2xl md:text-3xl">{suhu}&deg;C</h2>
                  </div>
                  <div className="flex justify-between md:gap-[0.8rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">Suhu Air </h2>
                  <h2 className="card-title text-2xl md:text-3xl">{suhuAir}&deg;C</h2>
                  </div>
                </div>
                  </div>
                </div>
              </div>
      
              <div className="card w-[22rem] md:w-1/3 border-4 border-primary">
                <div className="flex-row text-neutral card-body items-center justify-between">
                <div className="flex gap-3 text-start">
                <div className="grid w-20 h-20 rounded-2xl bg-primary text-white place-content-center">
                <WiHumidity size={60} />
                </div> 
                    <h2 className="card-title text-2xl md:text-3xl">Kelembaban</h2>
                  </div>
                  <div>
                  <h2 className="card-title text-2xl md:text-3xl">{kelembaban}%</h2>
                  </div>
                </div>
              </div>
              <div className="card w-[22rem] md:w-1/3 border-4 border-primary">
                <div className="flex-row text-neutral card-body items-center justify-between">
                <div className="flex gap-3 text-start items-center">
                <div className="grid w-20 h-20 rounded-2xl bg-primary text-white place-content-center">
                <GiPlantWatering size={60} />
                </div> 
                <div className="flex-row text-start">
                    <h2 className="card-title text-2xl md:text-3xl">Kelembaban</h2>
                    <h2 className="card-title text-2xl md:text-3xl">Media</h2>
                  </div>
                  </div>
                  <div>
                  <h2 className="card-title text-4xl">{kelembaban_med}%</h2>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex flex-col justify-stretch md:flex-row gap-4">
              <div className="card w-[22rem] md:w-1/2 border-4 border-primary">
                <div className="flex-row text-neutral card-body items-center justify-between">
                <div className="flex gap-3 text-start">
                <div className="grid w-20 h-20 rounded-2xl bg-primary text-white place-content-center">
                <RiWaterFlashFill size={60} />
                </div> 
                <div className="grid">
                  <div className="flex justify-between gap-[25rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">PPM Terukur</h2>
                  <h2 className="card-title text-2xl md:text-4xl">{ppm}</h2>
                  </div>
                  <div className="flex justify-between gap-[11rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">PPM Target </h2>
                  <h2 className="card-title text-2xl md:text-4xl">{targetPPM}</h2>
                  </div>
                </div>
                </div>
                <div>
                  </div>
                </div>
            </div>
            <div className="card w-[22rem] md:w-1/2 border-4 border-primary">
                <div className="flex-row text-neutral card-body items-center justify-between">
                <div className="flex gap-3 text-start">
                <div className="grid w-20 h-20 rounded-2xl bg-primary text-white place-content-center">
                <BiWater size={60} />
                </div> 
                <div className="grid">
                  <div className="flex justify-between gap-[30rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">pH Terukur</h2>
                  <h2 className="card-title text-2xl md:text-4xl">{pH}</h2>
                  </div>
                  <div className="flex justify-between gap-[0.8rem] w-full">
                  <h2 className="card-title text-2xl md:text-3xl">pH Target </h2>
                  <h2 className="card-title text-2xl md:text-4xl">{targetpH}</h2>
                  </div>
                </div>
                </div>
                <div>
                  </div>
                </div>
            </div>
            </div>
            {/* ))} */}
            <div className="divider my-[20px] mx-6" />
            <div className="grid mt-[-1rem]">
            <h2 className="card-title text-4xl ml-2">Kontrol Alat</h2>
            <div className="grid md:flex gap-4 w-full mt-4">
             
            <div className="card w-full md:w-3/4 border-4 border-primary">
                <div className="grid grid-cols-2 md:flex md:flex-row text-neutral card-body justify-between">
                <div className="grid text-center justify-items-center p-2 gap-2">
                <h2 className="card-title text-2xl">Pompa PPM Up</h2>
                {tombol1 == false || tombolArdu1 == "1"? (
                   <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-primary transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol1()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Nyala
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                   ) : (
                    <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-teal-600 transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol1()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Mati  
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    )}
                </div>
                <div className="grid text-center justify-items-center p-2 gap-2 md:ml-0">
                <h2 className="card-title text-2xl md:text-2xl">Pompa PPM Down</h2>
                {tombol2 == false || tombolArdu2 == "1"? (
                   <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-primary transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol2()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Nyala
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    ) : ( 
                    <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-teal-600 transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol2()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Mati  
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    )}
                </div>
                <div className="grid text-center justify-items-center p-2 gap-2">
                <h2 className="card-title text-2xl">Pompa pH Up</h2>
                {tombol3 == false || tombolArdu3 == "1"? (
                   <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-primary transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol3()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Nyala
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    ) : ( 
                    <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-teal-600 transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol3()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Mati
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    )}
                </div>
                <div className="grid text-center justify-items-center p-2 gap-2">
                <h2 className="card-title text-2xl">Pompa pH Down</h2>
                {tombol4 == false|| tombolArdu4 == "1" ? (
                   <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-primary transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol4()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Nyala
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    ) : ( 
                    <button
                      className="card w-32 h-24 md:w-48 md:h-32 justify-center items-center  bg-teal-600 transition duration-500 hover:bg-teal-500 border-4 border-base-100 text-base-100"
                      onClick={() => handleTombol4()}>
                      <div className="card-body">
                        <div className="flex gap-4">
                          <h2 className="card-title text-2xl xl:text-3xl my-2">
                            Mati
                          </h2>
                          {/* <GiWateringCan size={iconSize.size} /> */}
                        </div>
                      </div>
                    </button>
                    )}
                </div>
                </div>
              </div>
              <div className="card w-full md:w-1/4 bg-primary">
                <div className="flex text-white card-body gap-4">
                    <h2 className="card-title text-3xl">Set Parameter</h2>
                <Timepick/>
                <Parameter/>
                </div>
              </div>
            </div>
            
            </div>
            
          </div>
        </div>
         
      </div>
      
    </div>
    );
  };
  export default Dashboard;
  