import GameList from "./gamelist";
import NewGame from "./newgame";


export default function Home() {
    return (
        <section className="grid grid-cols-4">
            <NewGame></NewGame>
            <GameList></GameList>
        </section>
    );
}
