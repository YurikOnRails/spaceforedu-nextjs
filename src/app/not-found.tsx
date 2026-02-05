import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      <div className="relative z-10">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Хьюстон, у нас проблема!
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          Кажется, вы улетели слишком далеко в открытый космос. Этой страницы не существует.
        </p>
        <Link 
          href="/"
          className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-600 transition-all inline-block shadow-lg hover:shadow-cyan-500/30"
        >
          Вернуться на Землю
        </Link>
      </div>
    </div>
  )
}
