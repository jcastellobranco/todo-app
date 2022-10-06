import React from 'react';
import * as S from './styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
const tasks = [{ "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "101", "macaddress": "9191", "type": 2, "title": "Futebol Com a Galera", "description": "Jogar Futebol", "when": "10/05/2021", "__v": 0 },
    { "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "102", "macaddress": "6666", "type": 7, "title": "Comprar Café", "description": "Café é Vida", "when": "11/05/2021", "__v": 0 }]


function Home() {
    return (
        <S.Container>
            <Header />
            
            <S.FilterArea>
            <FilterCard title="Todos" actived={false}></FilterCard>
            <FilterCard title="Hoje" actived={true}></FilterCard>
            <FilterCard title="Semana" actived={false}></FilterCard>
            <FilterCard title="Mês" actived={false}></FilterCard>
            <FilterCard title="Ano" actived={false}></FilterCard>
            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {tasks.map((t) => <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} ></TaskCard>)}
            {/* {tasks.map((t) => <TaskCard key={t.title} type={t.type} title={t.title} when={t.when} done={t.done} ></TaskCard>)} */}

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default Home;
