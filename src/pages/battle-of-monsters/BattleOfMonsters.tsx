import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectSelectedRandomMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { Monster } from "../../models/interfaces/monster.interface"
import './index.css'

const BattleOfMonsters = () => {
    const [winner, setWinner] = useState<string | undefined>()
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedRandomMonster = useSelector(selectSelectedRandomMonster)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);



    const handleStartBattleClick = () => {
        fetch('http://localhost:3001/battle', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "monster1Id": selectedMonster?.id,
                "monster2Id": selectedRandomMonster?.id
            })
        }).then(response => response.json())
            .then(data => setWinner(data.winner.name))

    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />
            {winner &&
                <section className="monster-message-winner">
                    {winner} wins!
                </section>
            }
            <BattleSection>
                <MonsterBattleCard
                    title={selectedMonster?.name || "Player"}
                    monster={selectedMonster}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button" disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title="Computer" monster={selectedRandomMonster}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }