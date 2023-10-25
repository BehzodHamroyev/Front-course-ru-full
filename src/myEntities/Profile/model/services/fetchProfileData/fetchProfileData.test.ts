import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Country } from "myEntities/Country";
import { Currency } from "myEntities/Currency";
import { Avatar } from "shared/ui/Avatar/Avatar";

describe("fetchProfileData.test", () => {
  test("success fetchProfileData", async () => {
    const userValue = {
      username: "Behzod",
      lastname: "hamroyev",
      country: Country.Armenia,
      currency: Currency.EUR,
      age: 23,
      city: "firs",
      first: "sklsd",
      avatar: Avatar,
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error fetchProfileData", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
