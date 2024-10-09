"use client";
import Button from "./components/buttons/button/index";
import NavigationBar from "./components/navigation/navigation-bar/index";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <NavigationBar/>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button label="This is Button" onClick={handleClick} />
      </div>
    </div>
  );
}