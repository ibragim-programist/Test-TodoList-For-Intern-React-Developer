import OneTodo from "../OneTodo/OneTodo";
import { mockData } from "../../utils/getMockData";
import { useParams } from "react-router-dom";

export function OneTodoWrapper() {
  const { id } = useParams<{ id: string }>();
  
  const todoId = parseInt(id || '');
  const todo = mockData.find(t => t.id === todoId);
  
  if (!todo) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Todo not found</h2>
        <a href="/">← Back to list</a>
      </div>
    );
  }
  
  return <OneTodo {...todo} />;
}