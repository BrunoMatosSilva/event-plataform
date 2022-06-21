import { gql, useQuery } from "@apollo/client"

const GET_LESSIONS_QUERY = gql`
query {
  lessons{
    id
    title
  }
}
`

interface LessonProps {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: LessonProps[] }>(GET_LESSIONS_QUERY)

  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
