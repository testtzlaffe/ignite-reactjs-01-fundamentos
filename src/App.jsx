import { Header } from './components/Header'
import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Christian"
        content="Teste"
      />
      <Post
        author="Maria"
        content="Novo post"
      />
    </div>
  )
}
