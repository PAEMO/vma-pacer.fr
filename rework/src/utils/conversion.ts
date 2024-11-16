const ONE_HOUR_IN_SECONDS = 3600;
const ONE_HOUR_IN_MINUTES = 60;
const ONE_MINUTE_IN_SECONDS = 60;

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
      ? (parseFloat("0." + seconds) * ONE_MINUTE_IN_SECONDS) // arithmetic conversion
          .toFixed(0) // seconds are fixed numbers
          .padStart(2, "0") // always format on 2 digits ("4:02")
      : "00")
  );
};

// km/h to min/km
export const speedToPace = (speed: number): string =>
  decimalToPace(speed <= 0 ? 0 : ONE_HOUR_IN_MINUTES / speed);

const string2DigitsWithZero = (number: number) =>
  number.toString().padStart(2, "0");

// xxxx seconds to "00:00:00" time
const secondsToTime = (secondsTime: number): string => {
  const hours = Math.floor(secondsTime / ONE_HOUR_IN_SECONDS);
  const minutes = Math.floor(
    (secondsTime % ONE_HOUR_IN_SECONDS) / ONE_MINUTE_IN_SECONDS
  );
  const seconds = secondsTime % ONE_MINUTE_IN_SECONDS;

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
  const timeInSeconds = Math.round((length * ONE_HOUR_IN_SECONDS) / speed);
  return secondsToTime(timeInSeconds);
};

export const stringTimeToSecondsTime = (stringTime: string): number => {
  const [hours, minutes, seconds]: number[] = (stringTime
    ? stringTime.length === 5
      ? stringTime + ":00" // using type "time", when no seconds, format is hh:mm
      : stringTime
    : "00:00:00"
  )
    .split(":")
    .map((str: string) => parseInt(str));
  return (
    hours * ONE_HOUR_IN_SECONDS + minutes * ONE_MINUTE_IN_SECONDS + seconds
  );
};

// give me length and speed, I'll give you time (km / time => km/h)
export const lengthTimeToSpeed = (length: number, time: string): number => {
  return (length * ONE_HOUR_IN_SECONDS) / stringTimeToSecondsTime(time);
};

// Only for 10km, 21.1km and 42.2km at the moment
export const lengthSpeedToVma = (length: number, speed: number): number => {
  const coeff =
    length == 10
      ? 12.5 // good perf: 10, bad perf: 15
      : length == 21.1
      ? 17.5 // good perf: 15, bad perf: 20
      : length == 42.2
      ? 22 // good perf: 20, bad perf: 25
      : 0;
  // calculate reversed percentage
  return (speed * 100) / (100 - coeff);
};

export const speedToVo2Max = (speed: number) => speed * 3.5;

// m/s to km/h
export const metersPerSecondToKilometerPerHour = (mPerS: number) => mPerS * 3.6;
