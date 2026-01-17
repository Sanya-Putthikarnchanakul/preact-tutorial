import { TodoList } from '../../components/TodoList';
import { useTodos } from '../../hooks/useTodos';

export const TodosPage = () => {
  const { todos, loading, error } = useTodos();

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </section>
  );
}
