"use client";
import { useState, useEffect } from "react";
import { renderGameList } from "./action";
export default function GameList() {
    const initialState: React.JSX.Element[] = [];
    const [games, setGames] = useState(initialState);
    let cellClasses = "p-3.5 text-center";
    useEffect(() => {
        const updateGames = async () => {
            const gameList = await renderGameList();
            setGames(gameList);
        };
        updateGames();
    });
    const updateGames = async () => {
        const gameList = await renderGameList();
        setGames(gameList);
    };
    return (
        <section className="w-full h-full bg-white mx-8 my-5 col-span-3 col-start-2 col-end-4 shadow-lg relative">
            <table className="w-full">
                <thead className="bg-gray">
                    <tr className="min-h-14">
                        <th className={cellClasses}>
                            <button className="w-full h-full" onClick={updateGames}>Refresh</button>
                        </th>
                        <th className={cellClasses}>Game Name</th>
                        <th className={cellClasses}>Year</th>
                        <th className={cellClasses}>Platform</th>
                        <th className={cellClasses}>Cost</th>
                        <th className={cellClasses}>Times Played</th>
                    </tr>
                </thead>
                <tbody>{games}</tbody>
            </table>
        </section>
    );
}
