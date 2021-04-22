import React from 'react'
import { FcTodoList } from 'react-icons/fc'
import Form from '../Form/Form'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav className="pt-5 pb-4 bg-dark navbar navbar-light bg-light">
      <div className="container-fluid container">
        <Link to="/" className="navbar-brand text-white">
          <FcTodoList size="1.5em" /> ToDo List
        </Link>
        <Form />
      </div>
    </nav>
  )
}

export default Header
