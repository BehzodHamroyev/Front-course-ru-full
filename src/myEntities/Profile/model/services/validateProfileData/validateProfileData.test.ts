import { validateProfileData } from "./validateProfileData";
import { Country } from "myEntities/Country";
import { Currency } from "myEntities/Currency";
import { ValidateProfileError } from "../../types/profile";

describe("validateProfileData.test", () => {
  const userValue = {
    username: "Behzod",
    lastname: "hamroyev",
    country: Country.Armenia,
    currency: Currency.EUR,
    age: 23,
    city: "firs",
    first: "sklsd",
  };

  test("success validateProfileData", async () => {
    const result = validateProfileData(userValue);

    expect(result).toEqual([]);
  });

  test("without first name and lastname", () => {
    const result = validateProfileData({
      ...userValue,
      first: "",
      lastname: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("without incorrect age", () => {
    const result = validateProfileData({ ...userValue, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect info about country", () => {
    const result = validateProfileData({ ...userValue, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("Incorect all data", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
