import { Monster } from "../../models/interfaces/monster.interface"
import './index.css'

type Props = {
    monster: Monster
}

const MonsterBattleCardContent: React.FC<Props> = ({
    monster
}) => {
    return (
        <section className="monster-container-card">
            <img className="monster-container-card--img" src={monster.imageUrl} alt={monster.name} />
            <span className="monster-container-card--name">{monster.name}</span>
            <div className="monster-container-card--attributes">
                <div className="monster-container-card--attributes-item">
                    <label>HP</label>
                    <progress value={monster.hp} max={100} />
                </div>
                <div className="monster-container-card--attributes-item">
                    <label>Attack</label>
                    <progress value={monster.attack} max={100} />
                </div>
                <div className="monster-container-card--attributes-item">
                    <label>Defense</label>
                    <progress value={monster.defense} max={100} />
                </div>
                <div className="monster-container-card--attributes-item">
                    <label>Speed</label>
                    <progress value={monster.speed} max={100} />
                </div>
            </div>
        </section>
    )
}

export { MonsterBattleCardContent }