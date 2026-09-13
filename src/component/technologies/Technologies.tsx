import { use, useState } from "react";
import { toast } from "react-toastify";

import type { itechnologies } from "../../type/technologiestype";
import Technology from "./Technology";
import SelectedStack from "./SelectedStack";

interface TechnologiesProps {
  TechnologiesPromise: Promise<itechnologies[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);

  const [stack, setStack] = useState<itechnologies[]>([]);

  const handleAddStack = (technology: itechnologies) => {
    const exists = stack.some((item) => item.id === technology.id);

    if (exists) {
      toast.warning("Technology already added!");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemoveStack = (id: string) => {
    const selectedTechnology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (selectedTechnology) {
      toast.info(`${selectedTechnology.name} removed from stack!`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.success("All technologies removed!");
  };

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto">

        <div className="flex flex-col gap-6 lg:flex-row">

          <Technology
            technologies={technologies}
            stack={stack}
            handleAddStack={handleAddStack}
          />

          <SelectedStack
            stack={stack}
            handleRemoveStack={handleRemoveStack}
            handleRemoveAll={handleRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default Technologies;