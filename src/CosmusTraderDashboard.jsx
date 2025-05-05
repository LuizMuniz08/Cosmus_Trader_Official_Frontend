
import React from 'react';
import { useEffect, useState } from 'react';
import { FaChartLine, FaBolt, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CosmusTraderDashboard() {
  const [rsi, setRsi] = useState(null);
  const [ema, setEma] = useState(null);
  const [sinal, setSinal] = useState(null);
  const [mensagemExecucao, setMensagemExecucao] = useState(null);

  const fetchDados = async () => {
    const rsiResp = await fetch('http://127.0.0.1:8000/rsi/').then(res => res.json());
    const emaResp = await fetch('http://127.0.0.1:8000/ema/').then(res => res.json());
    const sinalResp = await fetch('http://127.0.0.1:8000/sinal-tatico/').then(res => res.json());
    setRsi(rsiResp);
    setEma(emaResp);
    setSinal(sinalResp);
  };

  const executarEntrada = async () => {
    const execResp = await fetch('http://127.0.0.1:8000/executar/').then(res => res.json());
    setMensagemExecucao(execResp.mensagem);
  };

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#111827' }}
      >
        <FaBolt style={{ marginRight: '10px', color: '#f59e0b' }} /> Cosmus Trader Official
      </motion.h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '300px' }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2563eb' }}>
            <FaChartLine style={{ marginRight: '6px' }} /> Indicadores Técnicos
          </h2>
          <p><strong>RSI:</strong> {rsi?.valor}</p>
          <p><strong>EMA:</strong> {ema?.valor}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '300px' }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#16a34a' }}>
            <FaPlay style={{ marginRight: '6px' }} /> Sinal Tático Inteligente
          </h2>
          <p><strong>Sinal:</strong> {sinal?.sinal}</p>
          <p><strong>Motivo:</strong> {sinal?.motivo}</p>
          <button
            onClick={executarEntrada}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Executar Entrada
          </button>
          {mensagemExecucao && <p style={{ color: '#16a34a', marginTop: '1rem' }}>{mensagemExecucao}</p>}
        </motion.div>
      </div>
    </div>
  );
}
