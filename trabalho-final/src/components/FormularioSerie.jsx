import { useState } from 'react'
import estilos from './FormularioSerie.module.css'

const STATUS = ['Quero assistir', 'Assistindo', 'Concluída']

function FormularioSerie({ serie, aoSalvar, aoCancelar }) {
  const [form, setForm] = useState({
    status: serie.dsStatus,
    nota: serie.nuNota === null ? '' : String(serie.nuNota),
    comentario: serie.dsComentario,
  })
  const [erro, setErro] = useState('')

  const enviar = (evento) => {
    evento.preventDefault()

    const textoNota = form.nota.trim()
    const nuNota = textoNota === '' ? null : Number(textoNota)
    if (nuNota !== null && (!Number.isFinite(nuNota) || nuNota < 0 || nuNota > 10)) {
      setErro('A nota precisa ser um número de 0 a 10.')
      return
    }

    aoSalvar({
      dsStatus: form.status,
      nuNota,
      dsComentario: form.comentario.trim(),
    })
  }

  return (
    <form className={estilos.formulario} noValidate onSubmit={enviar}>
      <label htmlFor={`status-${serie.idSerie}`}>Status</label>
      <select
        id={`status-${serie.idSerie}`}
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        {STATUS.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <label htmlFor={`nota-${serie.idSerie}`}>Minha nota (0 a 10)</label>
      <input
        id={`nota-${serie.idSerie}`}
        type="number"
        min="0"
        max="10"
        step="0.5"
        placeholder="Opcional"
        value={form.nota}
        onChange={(e) => setForm({ ...form, nota: e.target.value })}
      />

      <label htmlFor={`comentario-${serie.idSerie}`}>Comentário</label>
      <textarea
        id={`comentario-${serie.idSerie}`}
        rows="3"
        placeholder="O que você achou?"
        value={form.comentario}
        onChange={(e) => setForm({ ...form, comentario: e.target.value })}
      ></textarea>

      {erro && <p className={estilos.erro}>{erro}</p>}

      <div className={estilos.acoes}>
        <button type="submit">Salvar</button>
        <button type="button" className={estilos.cancelar} onClick={aoCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default FormularioSerie