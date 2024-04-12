"use client";
import { useFormState } from "react-dom";
import { enterGame } from "./action";

export default function NewGame() {
    const [state, formAction] = useFormState(enterGame, { message: "" });
    const inputClass ="text-gray-dark border-solid border"
    return (
        <section className="flex justify-center w-full col-span-1">
            <section className="mx-8 my-5 w-96 bg-white shadow-lg rounded-xl">
                {state.message === "error" && (
                    <section className="bg-light-red py-5 px-10">
                        Something went wrong with adding the game or the game
                        already exists
                    </section>
                )}
                {state.message === "success" && (
                    <section className="bg-light-green py-5 px-10">
                        Success!
                    </section>
                )}
                <h1 className="mx-auto flex p-6 justify-center">New Game</h1>
                <section className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                    <form
                        action={formAction}
                        className="grid grid-cols-1 gap-4"
                    >
                        <span id="game-name" className="flex justify-between">
                            <label>Name: </label>
                            <input
                                type="text"
                                name="gameName"
                                className={inputClass}
                            ></input>
                        </span>
                        <span id="game-year" className="flex justify-between">
                            <label>Year:</label>
                            <input
                                type="text"
                                name="gameYear"
                                className={inputClass}
                            ></input>
                        </span>
                        <span
                            id="game-platform"
                            className="flex justify-between"
                        >
                            <label>Platform:</label>
                            <select
                                name="gamePlatform"
                                className={inputClass}
                            >
                                <option value="Steam">Steam</option>
                                <option value="Fightcade">Fightcade</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                        <span id="game-cost" className="flex justify-between">
                            <label>Cost:</label>
                            <input
                                type="text"
                                name="gameCost"
                                className={inputClass}
                            ></input>
                        </span>
                        <span
                            id="game-times-played"
                            className="flex justify-between"
                        >
                            <label>Times Played:</label>
                            <input
                                type="number"
                                name="gameTimesPlayed"
                                className={inputClass}
                            ></input>
                        </span>
                        <button type="submit" className="bg-gray rounded-sm ">
                            Submit
                        </button>
                    </form>
                </section>
            </section>
        </section>
    );
}
