import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio1</h1>
      <button className="transition-colors duration-500 bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded">
        Hover me
      </button>
      <h1>Ejercicio2</h1>
      <div className="transition-transform hover:scale-125 duration-500 bg-purple-500 w-16 h-16"></div>
      <h1>Ejercicio3</h1>
      <button className="animate-bounce bg-yellow-500 text-white px-6 py-3 m-5 rounded-2xl">
        Click me!
      </button>
      <h1>Ejercicio4</h1>
      <div className="transition-opacity hover:opacity-50 duration-700 bg-black w-24 h-24"></div>
      <h1>Ejercicio5</h1>
      <div className="animate-fade-in bg-teal-500 w-16 h-16"></div>
    </div>
  );
}
