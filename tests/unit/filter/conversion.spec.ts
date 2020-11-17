import {
  decimalToPace,
  lengthSpeedToTime,
  speedToPace
} from "@/filter/conversion";

describe("conversion", () => {
  describe("decimal pace to pace", () => {
    it("with fixed number", () => {
      expect(decimalToPace(6)).toBe("6:00");
      expect(decimalToPace(0)).toBe("0:00");
    });
    it("with exact number", () => {
      expect(decimalToPace(5.5)).toBe("5:30");
    });
    it("with rounded number", () => {
      expect(decimalToPace(5.454545)).toBe("5:27");
    });
    it("with  less than 10 seconds (1 digit)", () => {
      expect(decimalToPace(4.03)).toBe("4:02");
    });
  });

  describe("speed to pace", () => {
    expect(speedToPace(0)).toBe("0:00");
    expect(speedToPace(10)).toBe("6:00");
    expect(speedToPace(18.3)).toBe("3:17");
    expect(speedToPace(25)).toBe("2:24");
  });

  describe("length and speed to time", () => {
    it("seconds only", () => {
      expect(lengthSpeedToTime(0.1, 18)).toBe("00:00:20");
    });
    it("minutes only", () => {
      expect(lengthSpeedToTime(1, 15)).toBe("00:04:00");
    });
    it("hours only", () => {
      expect(lengthSpeedToTime(20, 10)).toBe("02:00:00");
    });
    it("all of them", () => {
      expect(lengthSpeedToTime(20, 15.5)).toBe("01:17:25");
    });
  });
});
