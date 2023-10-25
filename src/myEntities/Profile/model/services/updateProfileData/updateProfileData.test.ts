import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { Country } from "myEntities/Country";
import { Currency } from "myEntities/Currency";
import { ValidateProfileError } from "../../types/profile";

describe("updateProfileData.test", () => {
  const userValue = {
    username: "Behzod",
    lastname: "hamroyev",
    country: Country.Armenia,
    currency: Currency.EUR,
    age: 23,
    city: "firs",
    first: "sklsd",
  };

  test("success updateProfileData", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: userValue },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error updateProfileData", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: userValue },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");

    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_SERVER]);
  });

  test("validation error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...userValue,
          lastname: "",
        },
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
