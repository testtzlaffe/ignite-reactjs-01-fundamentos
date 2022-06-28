import { Post } from './Post'

export function App() {
  return (
    <div>
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
