import { ShouldRemove } from "../../source/Actions/Files/Trimming";

test("Check should remove", () => {
  expect(ShouldRemove("C:/world/level.dat_old")).toEqual(true);
  expect(ShouldRemove("C:/world/manifest.json")).toEqual(false);
});
