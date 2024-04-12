import { database } from "../../firebase.config";
import { set, ref, get } from "firebase/database";

export async function enterGame(prevState: any, formData: any) {
    function generateGameKey(name: string) {
        let splitName = name.split(" ");
        let gameKey = "";
        if (splitName.length <= 1) {
            gameKey = name.charAt(0) + name.charAt(name.length - 1);
        } else {
            splitName.forEach((element: string) => {
                if (isNaN(+element)) {
                    gameKey += element.charAt(0);
                } else {
                    gameKey += element;
                }
            });
        }
        return gameKey.toLowerCase();
    }
    let gameKey = generateGameKey(formData.get("gameName"));
    if (gameKey === null || gameKey === undefined || gameKey === "") {
        return { message: "error" };
    } else {
        return await set(ref(database, "games/" + gameKey), {
            name: formData.get("gameName"),
            cost: formData.get("gameCost"),
            platform: formData.get("gamePlatform"),
            year: formData.get("gameYear"),
            timesPlayed: formData.get("gameTimesPlayed"),
        }).then(
            () => {
                console.log("Success");
                return { message: "success" };
            },
            (error) => {
                console.log(error);
                return { message: "error" };
            }
        );
    }
}
export async function getAllGames(pageOffset: number, numberOfGames: number) {
    return await get(ref(database, "games/")).then((response) => {
        return response.val();
    });
}
export async function renderGameList() {
    let cellClasses = 'p-3.5 text-center';
    let gameList: {[key:string]: any} = await getAllGames(0,5);
    return Object.entries(gameList).map(([key, value]) => {
         return (
            <tr className="min-h-14" key={key}>
                <td></td>
                <td className={cellClasses}>{value.name}</td>
                <td className={cellClasses}>{value.year}</td>
                <td className={cellClasses}>{value.platform}</td>
                <td className={cellClasses}>{value.cost}</td>
                <td className={cellClasses}>{value.timesPlayed}</td>
            </tr>
         )
    });
}
