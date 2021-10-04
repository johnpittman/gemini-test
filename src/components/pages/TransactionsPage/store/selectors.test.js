import { handleAccountBalanceOverTime } from "./selectors";

test("handleAccountBalanceOverTime", () => {
  let result = handleAccountBalanceOverTime("a", [
    {
      timestamps: "1",
      fromAddress: "b",
      toAddress: "a",
      amount: 10,
    },
    {
      timestamps: "2",
      fromAddress: "a",
      toAddress: "b",
      amount: 1,
    },
    {
      timestamps: "3",
      toAddress: "a",
      amount: 2,
    },
  ]);

  expect(result[2].balance).toEqual(11);
});
