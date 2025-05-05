
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-6">Cosmus Trader</h1>
        <nav className="flex flex-col space-y-2">
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">RSI</button>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">EMA</button>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sinal Tático</button>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Executar</button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
      <h2 className="text-2xl font-semibold">Bem-vindo ao Cosmus Trader 🚀</h2> // Versão publicada para print histórico

        <p className="mt-4">Clique em uma das opções do menu para iniciar a análise.</p>
      </main>
    </div>
  );
}

export default App;
