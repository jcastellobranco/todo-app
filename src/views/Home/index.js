import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import api from '../../services/api';
import Task from '../Task';

// const tasks = [{ "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "101", "macaddress": "9191", "type": 2, "title": "Futebol Com a Galera", "description": "Jogar Futebol", "when": "10/05/2021", "__v": 0 },
    // { "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "102", "macaddress": "6666", "type": 7, "title": "Comprar Café", "description": "Café é Vida", "when": "11/05/2021", "__v": 0 }]


function Home() {

    const [filterActived, setFilterActived] = useState('all');
    const [tasksApi,setTasksApi] = useState([])

    function loadTasks (){

        api.get(`/task/filter/${filterActived}/321654`).then(response => {  //'/task/filter/all/321654'
            setTasksApi(response.data)
        })

    }
    useEffect(()=>{
        loadTasks()
    },[filterActived])




    

    return (
        <S.Container>
            <Header />
            
            <S.FilterArea>
            <button onClick={() => setFilterActived("all")}>
            <FilterCard title="Todos" actived={filterActived=='all'}></FilterCard>
            </button>
            <button onClick={() => setFilterActived("today")}>
            <FilterCard title="Hoje" actived={filterActived=='today'}></FilterCard>
            </button>
            <button onClick={() => setFilterActived("week")}>
            <FilterCard title="Semana" actived={filterActived=='week'}></FilterCard>
            </button>
            <button onClick={() => setFilterActived("month")}>
            <FilterCard title="Mês" actived={filterActived=='month'}></FilterCard>
            </button>
            <button onClick={() => setFilterActived("year")}>
            <FilterCard title="Ano" actived={filterActived=='year'}></FilterCard>
            </button>
            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {/* {tasks.map((t) => <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} ></TaskCard>)} */}
            {tasksApi.map((t) => <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} ></TaskCard>)}

            </S.Content>
            <Footer />
            <Task />
        </S.Container>
    )
}

export default Home;
