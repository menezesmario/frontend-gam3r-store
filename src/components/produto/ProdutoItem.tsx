'use client'
import { Moeda, type Produto } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import NotaReview from '../shared/NotaReview';

export interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps){
  const {produto} = props
  return <Link href={`/produto/${produto.id}`} className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]">
    <div className="h-48 w-full relative">
      <div className="absolute flex justify-end top-2.5 right-2.5">
      <NotaReview nota={props.produto.nota} />
      </div>
      <Image src={produto.imagem} alt="Imagem do Produto" className="object-contain" fill />      
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{props.produto.nome}</span>
        <span className="text-sm border-b border-dashed self-start">{produto.especificacoes.destaque}</span>
        <div className="flex-1"></div>
        <div className="flex flex-col">          
          <span className="text-sm text-gray-400 line-through">
            de {Moeda.formatar(props.produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Moeda.formatar(props.produto.precoPromocional)}
          </span>
        </div>
        {/* <span>
          até {parcelamento.qtdeParcelas}x de {' '}
          {Moeda.formatar(parcelamento.valorParcela)}
        </span> */}
        <button 
            className="flex bg-violet-700 rounded-full justify-center 
            h-8 items-center hover:border-2 border-emerald-500 gap-2"
          onClick={(e: any) => {
            e.preventDefault()
            console.log('Adicionado')
            //adicionarItem(props.produto)
          }}
          >
          <IconShoppingCartPlus size={20}/>
           <span>Adicionar</span>
        </button>
      </div>
  </Link>
}