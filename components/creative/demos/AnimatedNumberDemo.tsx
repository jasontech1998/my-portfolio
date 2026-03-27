"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "@/components/creative/AnimatedNumber/AnimatedNumber";

export default function AnimatedNumberDemo() {
  const [inputValue, setInputValue] = useState<string>("1000");
  const [targetNumber, setTargetNumber] = useState<number>(1000);

  const handleConfirm = () => {
    const numberValue = parseInt(inputValue, 10);
    if (!isNaN(numberValue)) {
      setTargetNumber(numberValue);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center gap-4">
        <label htmlFor="targetNumber" className="text-sm text-muted-foreground">
          Set Target Number:
        </label>
        <Input
          type="number"
          id="targetNumber"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          min="0"
          className="w-32 px-3 py-2 text-sm text-center"
        />
        <Button onClick={handleConfirm} className="px-4 py-2 rounded-lg">
          Confirm
        </Button>
      </div>
      <AnimatedNumber targetNumber={targetNumber} duration={2000} />
    </div>
  );
}
