"use client";
import Button from "./components/buttons/button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Hello World</h1>
        <Button label="This is Button" onClick={handleClick} />
    </div>
  );
}
