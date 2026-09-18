// Componente que recebe um livro via props e mostra os dados dele.
function Livro(props) {
  return (
    <li className="livro">
      {props.livro.titulo} — {props.livro.autor} — {props.livro.ano} —{' '}
      {props.livro.genero}
    </li>
  )
}

export default Livro