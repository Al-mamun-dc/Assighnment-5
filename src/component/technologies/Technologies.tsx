import { use, useState } from "react";
import type { itechnologies } from "../../type/technologiestype";
import Technology from "./Technology";
import SelectedStack from "./SelectedStack";
import { toast } from "react-toastify";

interface TechnologiesProps {
  TechnologiesPromise: Promise<itechnologies[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);

  const [stack, setStack] = useState<itechnologies[]>([]);

  const handleAddStack = (technology: itechnologies) => {
    const exists = stack.find((item) => item.id === technology.id);

    if (exists) {
      toast.warning("Technology already added!");
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemoveStack = (id: string) => {
    const selectedTechnology = stack.find(
      (item) => item.id === id
    );

    const remainingStack = stack.filter(
      (item) => item.id !== id
    );

    setStack(remainingStack);

    if (selectedTechnology) {
      toast.info(`${selectedTechnology.name} removed!`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.success("All technologies removed!");
  };

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-gray-800">
          Explore the{" "}
          <span className="text-pink-500">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick technologies to build your ideal stack.
        </p>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row">

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