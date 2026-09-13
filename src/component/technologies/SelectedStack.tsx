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

      <h3 className="font-semibold">
        Your Stack
      </h3>

      <p className="mt-1 text-xs text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (

        <div className="mt-4 rounded-lg border border-gray-200 p-5 text-center text-xs text-gray-400">
          Your stack is empty
        </div>

      ) : (

        <>
          <div className="mt-4 space-y-2">

            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded border border-gray-200 p-2"
              >

                <div className="flex items-center gap-2">

                  <img src={item.icon} alt={item.name}className="h-5 w-5" />

                  <div>
                    <p className="text-sm">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.category}
                    </p>
                  </div>

                </div>

                <button onClick={() => handleRemoveStack(item.id)}className="text-gray-400 hover:text-red-500">
                  ✕
                </button>

              </div>
            ))}

          </div>

          <button onClick={handleRemoveAll} className="mt-5 w-full rounded border border-red-300 py-2 text-sm text-red-500" >
            Remove All
          </button>
        </>

      )}

    </div>
  );
};

export default SelectedStack;