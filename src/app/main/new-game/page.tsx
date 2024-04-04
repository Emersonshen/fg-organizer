import { database } from "../../firebase.config";
import { set, ref, get, child } from 'firebase/database';

export default function Home() {
    async function enterGame(formData: any) {
        "use server";
        let gameKey = generateGameKey(formData.gameName);
        get(child(ref(database), `games/${gameKey}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
    function generateGameKey(name:string) {
        let splitName = name.split(' ');
        let gameKey = '';
        if(splitName.length <= 1) {
            gameKey = name.charAt(0) + name.charAt(name.length - 1);
        } else {
            splitName.forEach(element => {
                gameKey += element.charAt(0);
            });
        }
        return gameKey;
    }
    return (
        <section>
            <h1 className="mx-auto flex p-6 justify-center">New Game</h1>
            <section className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                <form action={enterGame} className="grid grid-cols-1 gap-4">
                    <span id="game-name" className="flex justify-between">
                        <label>Name:</label>
                        <input type="text" name="gameName"></input>
                    </span>
                    <span id="game-year" className="flex justify-between">
                        <label>Year:</label>
                        <input type="text" name="gameName"></input>
                    </span>
                    <span id="game-platform" className="flex justify-between">
                        <label>Platform:</label>
                        <select name="gameName"></select>
                    </span>
                    <span id="game-cost" className="flex justify-between">
                        <label>Cost:</label>
                        <input type="number" name="gameName"></input>
                    </span>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
}
