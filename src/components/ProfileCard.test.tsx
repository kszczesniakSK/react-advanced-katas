import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";
import profileCardFactory from "../factories/profileCardFactory";
import { debug } from "jest-preview";
import "@testing-library/jest-dom";

test("renders ProfileCard with dynamic data", () => {
  const profileProps = profileCardFactory.build();

  render(<ProfileCard {...profileProps} />);
  //Use Jest Preview to show/debug UI rendered in the test
  debug();

  expect(screen.getByText(`Profile: ${profileProps.name}`)).toBeInTheDocument();
  expect(screen.getByText(profileProps.bio)).toBeInTheDocument();
  expect(screen.getByText(`Age: ${profileProps.age}`)).toBeInTheDocument();
});
