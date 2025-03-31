import { Form } from "../UI/Form";
import data from "./DummyReciepies.json";

export function Meals() {
  return (
    <div className="w-[70%] mx-auto bg-white border-2 rounded-lg shadow-md p-6">
      <ul className="flex flex-col items-start space-y-3">
        {data.map((ele) => (
          <li
            key={ele.id}
            className="w-full border-b-2 border-indigo-400 py-3 px-4 hover:bg-gray-100 rounded-md transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800">{ele.name}</h2>
            <p className="text-gray-600">{ele.title}</p>
            <p className="text-green-600 font-semibold">${ele.price.toFixed(2)}</p>
            <Form ele={ele}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
   