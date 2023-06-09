import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="text-sm flex items-center gap-1 text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar midia
          </label>

          <input id="media" type="file" className="hidden" />

          <label
            htmlFor="isPublic"
            className="text-sm flex items-center gap-1.5 text-gray-200 hover:text-gray-100"
          >
            <input
              id="isPublic"
              name="isPublic"
              type="checkbox"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:ring-0"
            />
            Tornar memória pública
          </label>
        </div>

        <textarea
          name="content"
          spellCheck={false}
          className="text-lg w-full flex-1 resize-none rounded border-0 bg-transparent p-0 leading-relaxed text-gray-100 placeholder-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  )
}
