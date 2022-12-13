import ReactWebComponent from 'react-web-component'
import { IndexContent } from '@/components/IndexContent'

const IndexPage = () => {
  return (
    <div>
      <IndexContent />
    </div>
  )
}

// カスタムタグを定義
ReactWebComponent.create(<IndexPage />, 'index-page', false)
