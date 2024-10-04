import { produtos } from '@/core';
import ProdutoItem from '../components/produto/ProdutoItem';


export default function Home() {
  return (
    <div className='grid grid-cols-4 gap-5 container'>
      {produtos.map((produto) => (
      <ProdutoItem key={produto.id} produto={produto}/>
      ))}
    </div>
  );
}
