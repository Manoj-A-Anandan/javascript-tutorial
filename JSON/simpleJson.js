/*
The most standard format for communication between two system softwares today is JSON (JavaScript Object Notation)
    - Easy to parse in almost every language
    - Works perfectly with web APIs
    - Lightweight compared to XML
    - Directly compatible with JavaScript

JSON format:
{
    key: value,
    key: value
}
    Note that in JSON the key should always be in quotes - strings

When data is sent over the internet, it’s sent as text. That means the JSON is stringified before transmission.
Because network protocols transmit bytes / text, not complex objects in memory.
    JS Object => stringify => Network => parse => JS Object

*/

const sampleWeatherData = "{\"location\":{\"city\":\"Coimbatore\",\"country\":\"India\",\"lat\":11.0168,\"lon\":76.9558},\"current\":{\"temp_c\":28.5,\"temp_f\":83.3,\"condition\":\"Partly Cloudy\",\"humidity\":64,\"wind_kph\":12.5,\"wind_dir\":\"NE\"},\"forecast\":[{\"day\":\"Monday\",\"high\":31.2,\"low\":24.5,\"condition\":\"Sunny\"},{\"day\":\"Tuesday\",\"high\":30.1,\"low\":23.8,\"condition\":\"Rain Showers\"}]}"

const parsedData = JSON.parse(sampleWeatherData); // This will converts the stringified JSON to js Objects

console.log(parsedData);

// Again to send a response for the weather provider, the standard format is to send STringified JSON
const response = {
    success: true,
    message: "Data Recieved"
}

const jsonString = JSON.stringify(response);
console.log(jsonString);