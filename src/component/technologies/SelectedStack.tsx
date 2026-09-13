import type { itechnologies } from "../../type/technologiestype";

interface SelectedStackProps {
  stack: itechnologies[];
  handleRemoveStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const SelectedStack = ({
  stack,
  handleRemoveStack,
  handleRemoveAll,
}: SelectedStackProps) => {
  return (
    <div className="h-fit w-full rounded-xl border border-gray-200 bg-white p-5 lg:w-64">
      
      <h3 className="font-semibold text-gray-800">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-lg border border-gray-200 p-5 text-center text-sm text-gray-400">
          Your stack is empty
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3">
                  
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8"
                  />

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => handleRemoveStack(item.id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}

          </div>

          <button
            onClick={handleRemoveAll}
            className="mt-8 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default SelectedStack;