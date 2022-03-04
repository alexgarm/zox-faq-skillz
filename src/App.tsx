import React from 'react';
import logo from './logo.svg';
import SubjectList from './components/SubjectList'
import './App.css';
import data from './data/data'

function App() {

    return <SubjectList subjects={data} />
    

}

export default App;
