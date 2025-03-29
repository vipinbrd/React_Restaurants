export function Form() {
    return (
      <>
        <label htmlFor="qty" className="text-gray-700 font-medium mr-1">
          Quantity
        </label>
        <input
          className="w-20 text-black-700 border border-gray-400 rounded-md px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="qty"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
        <button
          className="bg-red-700 ml-1 hover:bg-red-800 transition-all px-4 py-2 rounded-md text-white font-semibold shadow-md"
          type="submit"
        >
          + Add
        </button>
      </>
    );
  }
  