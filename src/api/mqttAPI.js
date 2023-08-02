import mqtt from "precompiled-mqtt";

var mqttClient;
const mqttHost = "monsys.cloud";
const protocol = "ws";
const port = "9001";
function connectToBroker() {
    const clientId = "clientTesting";
  
    // Change this to point to your MQTT broker
    const hostURL = `${protocol}://${mqttHost}:${port}`;
  
    const options = {
      keepalive: 60,
      clientId: clientId,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    };
  
    mqttClient = mqtt.connect(hostURL, options);
  
    mqttClient.on("error", (err) => {
      console.log("Error: ", err);
      mqttClient.end();
    });
  }
connectToBroker();
export default mqttClient;