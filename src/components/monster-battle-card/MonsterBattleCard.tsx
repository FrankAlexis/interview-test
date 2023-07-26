import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle } from "./MonsterBattleCard.styled"
import { MonsterBattleCardContent } from "./MonsterBattleCardContent"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({
    title,
    monster
}) => {
    return (
        <BattleMonsterCard centralized>

            {monster ?
                <MonsterBattleCardContent monster={monster} />
                : <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            }
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }