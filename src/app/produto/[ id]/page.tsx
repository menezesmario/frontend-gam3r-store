import { produtos } from '@/core';

console.log(produtos)
export default function PaginaProduto(props: any) {
  console.log(produtos)

  const id = props.params.id
  const produto = produtos.find((produto) => produto.id === parseInt(id));
  return <div>Produto: {produto?.nome}</div>
}