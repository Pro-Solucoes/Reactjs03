import React from "react";
import { connect } from "react-redux";

const TodoList = () => (
  <ul>
    <li>Fazer café</li>
    <li>Estudar React</li>
    <li>Dormir</li>
  </ul>
);
const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(TodoList);
