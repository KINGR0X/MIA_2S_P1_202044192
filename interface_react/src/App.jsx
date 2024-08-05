import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <label htmlFor="input" className="block text-lg font-bold">
          Entrada:
        </label>
        <Textarea
          id="input"
          placeholder="Ingrese su código aquí"
          className="w-full h-32 border rounded-md"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" className="flex items-center space-x-1">
          <ClipboardIcon className="w-4 h-4" />
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-400 transition-colors">
          Ejecutar
        </Button>
      </div>

      <div className="space-y-2">
        {/* Label salida */}
        <label htmlFor="output" className="block text-lg font-bold">
          Salida:
        </label>
        <Textarea
          id="output"
          placeholder="Mensajes de ejecución"
          className="w-full h-32 p-4 text-green-500 rounded-md"
          readOnly
        />
      </div>
    </div>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
