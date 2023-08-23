import { useEffect, useState } from "react";
import moment from "moment/moment";
import "moment/locale/id";

function Clock(props) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  // const format = "HH:mm:ss";
  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }
  function tick() {
    const d = new Date();
    const day = d.getDay();
    const tgl = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    var namahariL = "";
    var namablnL = "";
    switch (day) {
      case 0:
        namahariL = "Minggu";
        break;
      case 1:
        namahariL = "Senin";
        break;
      case 2:
        namahariL = "Selasa";
        break;
      case 3:
        namahariL = "Rabu";
        break;
      case 4:
        namahariL = "Kamis";
        break;
      case 5:
        namahariL = "Jumat";
        break;
      case 6:
        namahariL = "Sabtu";
        break;
      default:
        break;
    }

    switch (month) {
      case 0:
        namablnL = "Januari";
        break;
      case 1:
        namablnL = "Pebruari";
        break;
      case 2:
        namablnL = "Maret";
        break;
      case 3:
        namablnL = "April";
        break;
      case 4:
        namablnL = "Mei";
        break;
      case 5:
        namablnL = "Juni";
        break;
      case 6:
        namablnL = "Juli";
        break;
      case 7:
        namablnL = "Agustus";
        break;
      case 8:
        namablnL = "September";
        break;
      case 9:
        namablnL = "Oktober";
        break;
      case 10:
        namablnL = "November";
        break;
      case 11:
        namablnL = "Desember";
        break;

      default:
        break;
    }
    setCurrentYear(
        formatTime(tgl) +
        tgl +
        " " +
        formatTime(namablnL) +
        namablnL +
        " " +
        formatTime(year) +
        year
    );

    setCurrentDay(
      formatTime(namahariL) +
      namahariL
    );

    setCurrentTime(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s + " WIB"
    );
  }

  useEffect(() => {
    setTimeout(() => {
      tick();
    }, 1000);
  });
  return (
   
      <div className="grid md:flex justify-between items-center mt-6 lg:mt-1 text-base-content mx-2">
      <div className="grid">
      <p className="text-4xl font-aku font-bold">{[currentDay]}</p>
      <p className="text-3xl font-aku">{[currentYear]}</p>
      </div>
    
        <p className="text-3xl font-aku">{[currentTime]}</p>
      </div>

  );
}
export default Clock;
