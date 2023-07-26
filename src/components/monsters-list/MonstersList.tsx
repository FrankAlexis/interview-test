import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setSelectedRandomMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        const otherMonsters = monsters.filter(m => m.id !== monster.id)
        const randomMonster = otherMonsters[Math.floor(Math.random() * otherMonsters.length)]
        dispatch(setSelectedMonster(!value ? null : monster));
        dispatch(setSelectedRandomMonster(randomMonster));
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster' : 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }