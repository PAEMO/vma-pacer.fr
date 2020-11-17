// km/h to km/h (90% VMA for example)
export const applyPercentageSpeed = (speed: number, percentage = 100): number =>
  (speed * percentage) / 100;

// 4.5 to "4:30"
export const decimalToPace = (decimalPace: number): string => {
  const [minutes, seconds] = decimalPace.toString().split(".");
  return (
    minutes +
    ":" +
    (seconds
      ? (parseFloat("0." + seconds) * 60) // arithmetic conversion
          .toFixed(0) // seconds are fixed numbers
          .padStart(2, "0") // always format on 2 digits ("4:02")
      : "00")
  );
};

// km/h to min/km
export const speedToPace = (speed: number): string =>
  decimalToPace(speed <= 0 ? 0 : 60 / speed);

const string2DigitsWithZero = (number: number) =>
  number.toString().padStart(2, "0");

// xxxx seconds to "00:00:00" time
const secondsToTime = (secondsTime: number): string => {
  const hours = Math.floor(secondsTime / 3600);
  const minutes = Math.floor((secondsTime % 3600) / 60);
  const seconds = secondsTime % 60;

  return (
    string2DigitsWithZero(hours) +
    ":" +
    string2DigitsWithZero(minutes) +
    ":" +
    string2DigitsWithZero(seconds)
  );
};

// give me length and speed, I'll give you time
export const lengthSpeedToTime = (length: number, speed: number): string => {
  const timeInSeconds = Math.round((length * 3600) / speed);
  return secondsToTime(timeInSeconds);
};

export const speedToVo2Max = (speed: number) => speed * 3.5;

// m/s to km/h
export const metersPerSecondToKilometerPerHour = (mPerS: number) => mPerS * 3.6;
