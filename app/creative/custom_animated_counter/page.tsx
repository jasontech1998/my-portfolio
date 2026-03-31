"use client";

import { StackBadge } from "@/components/StackBadge";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AnimatedNumber from "@/components/creative/AnimatedNumber/AnimatedNumber";
import { BackButton } from "@/components/BackButton";

export default function Page() {
  const techStack = ["React", "Typescript"];
  const [inputValue, setInputValue] = useState<string>("1000");
  const [targetNumber, setTargetNumber] = useState<number>(1000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleConfirm = () => {
    const numberValue = parseInt(inputValue, 10);
    if (!isNaN(numberValue)) {
      setTargetNumber(numberValue);
    }
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <BackButton href="/creative" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Animated Counter
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          January 2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          A React component that smoothly animates numbers incrementing with a
          flipping effect.
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <label htmlFor="targetNumber" className="text-sm text-muted-foreground">
          Set Target Number:
        </label>
        <Input
          type="number"
          id="targetNumber"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
          className="w-32 px-3 py-2 borderrounded-lg shadow-sm focus:outline-none focus:ring-2text-sm text-center"
        />
        <Button onClick={handleConfirm} className="px-4 py-2 rounded-lg">
          Confirm
        </Button>
      </div>

      <div className="flex mt-4 p-4 justify-center items-center rounded-md border-accent border-2">
        <AnimatedNumber targetNumber={targetNumber} duration={2000} />
      </div>
    </section>
  );
}
