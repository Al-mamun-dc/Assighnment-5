import type { itechnologies } from "../../type/technologiestype";

interface TechnologyProps {
  technologies: itechnologies[];
  stack: itechnologies[];
  handleAddStack: (technology: itechnologies) => void;
}

const Technology = ({
  technologies,
  stack,
  handleAddStack,
}: TechnologyProps) => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      {technologies.map((technology) => {

        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <div
            key={technology.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-7 w-7"
              />

              <span className="text-xs text-blue-500">
                {technology.badge}
              </span>

            </div>

            <h3 className="mt-4 font-semibold">
              {technology.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {technology.description}
            </p>

            <div className="mt-4 flex justify-between text-xs text-gray-500">

              <span>{technology.category}</span>

              <span>{technology.difficulty}</span>

              <span>★ {technology.rating}</span>

            </div>

            <button onClick={() => handleAddStack(technology)} disabled={isAdded} className="mt-4 w-full rounded bg-gray-900 py-2 text-white" >
              {isAdded
                ? "✓ Added to Stack"
                : "Add to Stack"}
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default Technology;