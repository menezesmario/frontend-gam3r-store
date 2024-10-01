import type Especificacoes from "./Especificacoes"
import type Precificavel from "./Precificavel"

export default interface Produto extends Precificavel {
  id: number
  nome: string
  descricao: string
  marca: string
  modelo: string
  imagem: string
  videoReview: string
  nota: number
  tags: string[]
  especificacoes: Especificacoes
}